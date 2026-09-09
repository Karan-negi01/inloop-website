/************************************************************************
 *  INLOOP MEDIA — LEADS AUTOMATION  (Google Apps Script)
 *  ------------------------------------------------------------------
 *  Paste this into the MASTER sheet:  Extensions → Apps Script.
 *  It contains 4 building blocks:
 *    1) syncAssignedLeads()   — copy assigned leads to each exec's file
 *    2) createMeetingForRow() — make a Calendar event + Meet link + email
 *    3) postBriefToSlack()    — send a call brief to your #sales channel
 *    4) doPost()              — receives enquiries from the Inloop website
 *                                (contact form + AI Growth Score form) and
 *                                appends them straight into "Website (Inloop)"
 *
 *  Run once from the editor to authorise, then add time-based triggers
 *  (Triggers → Add Trigger → syncAssignedLeads → Time-driven → every 5 min).
 *
 *  For doPost to work, deploy this project: Deploy → New deployment →
 *  Web app → Execute as: Me → Who has access: Anyone. Copy the /exec URL
 *  it gives you into the website's GOOGLE_SHEETS_WEBHOOK_URL env var.
 ************************************************************************/

/* ====== CONFIG — edit these ====== */

// The source tabs in the master that hold leads.
var SOURCE_TABS = [
  'WhatsApp Business', 'Instagram DMs', 'Meta Lead Forms',
  'Meta Ads', 'LinkedIn', 'Website (Inloop)'
];

// Map each executive name (exactly as it appears in the Assigned To
// dropdown) to THEIR OWN spreadsheet ID (the long id in the sheet URL).
var EXEC_SHEETS = {
    'Avneet Kaur': '1N8WZAK2LhwOvRbREc0KzWHBh3SkvZnoEKWv1Jllxh5Y'

};

// The tab name inside each executive's file where leads should land.
var EXEC_TAB = 'My Leads';

// Your Slack Incoming Webhook URL (api.slack.com → your app → Incoming Webhooks).
var SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/XXX/YYY/ZZZ';

// The tab that website form submissions (block 4, below) land in. Same
// tab syncAssignedLeads() already reads from — new rows appear here with
// Assigned To / Synced? left blank, exactly like a manually-added lead,
// so they flow into the normal assign → sync → meet → brief pipeline.
var WEBSITE_LEAD_TAB = 'Website (Inloop)';


/* ==================================================================
 * 1) SYNC ASSIGNED LEADS  →  executive's private sheet
 * Columns in master (per source tab):
 *   A Name | B Number | C Email | D Brand/Niche | E Date Registered | F Assigned To
 * We add a hidden G "Synced?" flag so a lead is copied only once.
 * ================================================================== */
function syncAssignedLeads() {
  var master = SpreadsheetApp.getActiveSpreadsheet();

  SOURCE_TABS.forEach(function (tabName) {
    var sheet = master.getSheetByName(tabName);
    if (!sheet) return;

    var lastRow = sheet.getLastRow();
    if (lastRow < 2) return;

    // A2:G(lastRow) — 7 columns (F = Assigned To, G = Synced flag)
    var range = sheet.getRange(2, 1, lastRow - 1, 7);
    var rows  = range.getValues();

    rows.forEach(function (row, i) {
      var name       = row[0];
      var assignedTo = row[5];
      var alreadySynced = row[6];

      if (!name || !assignedTo || alreadySynced === 'YES') return;

      var execId = EXEC_SHEETS[assignedTo];
      if (!execId) {
        Logger.log('No sheet mapped for executive: ' + assignedTo);
        return;
      }

      var execTab = SpreadsheetApp.openById(execId).getSheetByName(EXEC_TAB);
      // Exec columns: A Name|B Number|C Email|D Brand/Niche|E Date Reg|F Date Assigned|G Status...
      execTab.appendRow([
        row[0],            // Name
        row[1],            // Number
        row[2],            // Email
        row[3],            // Brand / Niche
        row[4],            // Date Registered
        new Date(),        // Date Assigned (stamped now)
        'New'              // Status default
      ]);

      // mark master row as synced so it never duplicates
      sheet.getRange(i + 2, 7).setValue('YES');
    });
  });
}


/* ==================================================================
 * 2) CREATE A MEETING  →  Calendar event + Google Meet + email invite
 * Call with the client email, a title, and a start time.
 * Returns the Meet link so you can write it back into the sheet.
 * Requires the "Calendar" advanced service OR just CalendarApp (below).
 * ================================================================== */
function createMeetingForRow(clientEmail, title, startTime, minutes) {
  minutes = minutes || 30;
  var start = new Date(startTime);
  var end   = new Date(start.getTime() + minutes * 60000);

  // CalendarApp creates the event + emails guests. To force a Meet link,
  // use the advanced Calendar service (Services → Calendar API) as below.
  var event = Calendar.Events.insert({
    summary: title,
    start: { dateTime: start.toISOString() },
    end:   { dateTime: end.toISOString() },
    attendees: [{ email: clientEmail }],
    conferenceData: {
      createRequest: {
        requestId: 'inloop-' + new Date().getTime(),
        conferenceSolutionKey: { type: 'hangoutsMeet' }
      }
    }
  }, 'primary', {
    conferenceDataVersion: 1,
    sendUpdates: 'all'          // <-- emails the client the invite
  });

  return event.hangoutLink;     // the Google Meet URL
}

// Example helper: schedule from the currently selected exec-sheet row.
function scheduleFromSelectedRow() {
  var sh  = SpreadsheetApp.getActiveSheet();
  var r   = sh.getActiveRange().getRow();
  var email = sh.getRange(r, 3).getValue();               // C Email
  var name  = sh.getRange(r, 1).getValue();               // A Name
  var when  = sh.getRange(r, 9).getValue();               // I Meeting (date & time)
  var link  = createMeetingForRow(email, 'Inloop x ' + name, when, 30);
  sh.getRange(r, 9).setNote('Meet: ' + link);             // store the link as a note
}


/* ==================================================================
 * 3) POST BRIEF TO SLACK  →  #sales channel
 * Call when the exec fills the Brief column.
 * ================================================================== */
function postBriefToSlack(execName, clientName, brand, brief) {
  var payload = {
    text: '*New call brief from ' + execName + '*',
    blocks: [
      { type: 'section', text: { type: 'mrkdwn',
        text: ':memo: *Call brief — ' + clientName + '* (' + brand + ')\n' +
              '*Executive:* ' + execName } },
      { type: 'section', text: { type: 'mrkdwn', text: '*What was decided / next steps:*\n' + brief } }
    ]
  };
  UrlFetchApp.fetch(SLACK_WEBHOOK_URL, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload)
  });
}

// Example helper: post the brief from the currently selected exec-sheet row.
function postBriefFromSelectedRow() {
  var sh = SpreadsheetApp.getActiveSheet();
  var r  = sh.getActiveRange().getRow();
  var clientName = sh.getRange(r, 1).getValue();   // A Name
  var brand      = sh.getRange(r, 4).getValue();   // D Brand/Niche
  var brief      = sh.getRange(r, 10).getValue();  // J Brief
  var execName   = sh.getRange(1, 12).getValue() || 'Executive'; // put exec name in L1, or hardcode
  postBriefToSlack(execName, clientName, brand, brief);
}
function setupDropdowns() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var names = Object.keys(EXEC_SHEETS);
  var rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(names, true).setAllowInvalid(false).build();
  var done = [];
  SOURCE_TABS.forEach(function (t) {
    var s = ss.getSheetByName(t);
    if (s) { s.getRange('F2:F1000').setDataValidation(rule); done.push(t); }
  });
  Logger.log('URL of the file this script controls: ' + ss.getUrl());
  Logger.log('File name: ' + ss.getName());
}


/* ==================================================================
 * 4) WEBSITE FORM INTAKE  →  appends into "Website (Inloop)"
 * Receives POSTs from the Inloop site's /api/lead route (both the
 * contact form and the AI Growth Score form land here). New rows use
 * the SAME A-E layout as every other source tab — Assigned To (F) and
 * Synced? (G) are left blank, so syncAssignedLeads() picks them up the
 * next time it runs, exactly like a lead added by hand. Everything the
 * two forms collect beyond name/number/email/brand is kept in columns
 * H onward, purely for reference — it doesn't interfere with F/G.
 * ================================================================== */
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(WEBSITE_LEAD_TAB);
    if (!sheet) throw new Error('Sheet tab "' + WEBSITE_LEAD_TAB + '" not found');

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Name', 'Number', 'Email', 'Brand/Niche', 'Date Registered',
        'Assigned To', 'Synced?',
        'Source', 'Message', 'Instagram', 'AI Growth Score', 'Score Label', 'Page URL'
      ]);
    }

    var brandNiche = data.brandOrWebsite || '';
    if (data.industry) brandNiche = brandNiche ? (brandNiche + ' — ' + data.industry) : data.industry;

    sheet.appendRow([
      data.nameOrBrand || '',   // A Name
      data.phone || '',         // B Number
      data.email || '',         // C Email
      brandNiche,                // D Brand/Niche
      new Date(),                // E Date Registered
      '',                        // F Assigned To (left blank for manual/automatic assignment)
      '',                        // G Synced? (left blank so syncAssignedLeads() will pick it up)
      data.source || '',         // H Source ("Contact Form" / "AI Growth Score")
      data.message || '',        // I Message / Needs
      data.instagram || '',      // J Instagram
      data.aiGrowthScore != null ? data.aiGrowthScore : '', // K AI Growth Score
      data.scoreLabel || '',     // L Score Label
      data.pageUrl || ''         // M Page URL
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}


/************************************************************************
 *  PERMISSIONS EACH BLOCK NEEDS (Apps Script asks on first run):
 *   • syncAssignedLeads   — Sheets read/write (SpreadsheetApp)
 *   • createMeetingForRow — Calendar API (enable under Services → Calendar)
 *   • postBriefToSlack    — external requests (UrlFetchApp) + a Slack webhook
 *   • doPost               — Sheets read/write (SpreadsheetApp); runs
 *                             automatically whenever the website posts a lead
 ************************************************************************/
