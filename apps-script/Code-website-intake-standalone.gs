/************************************************************************
 *  INLOOP MEDIA — WEBSITE LEAD INTAKE (standalone Apps Script)
 *  ------------------------------------------------------------------
 *  Deployed from a personal Google account (not the inloopmedia.com
 *  Workspace), because Workspace policy blocks anonymous access to
 *  Apps Script web apps deployed from the org account. This script is
 *  NOT bound to the spreadsheet — it opens it explicitly by ID, so it
 *  works from any account that has Editor access to the sheet.
 *
 *  Setup:
 *   1) Share the master sheet with this Google account — Editor access.
 *   2) script.google.com → New project → paste this file in → Save.
 *   3) Deploy → New deployment → Web app → Execute as: Me →
 *      Who has access: Anyone → Deploy → authorize when asked.
 *   4) Copy the /exec URL into the website's GOOGLE_SHEETS_WEBHOOK_URL.
 *
 *  Only touches the "Website (Inloop)" tab. Same row layout the master
 *  sheet's own syncAssignedLeads() expects:
 *    A Name | B Number | C Email | D Brand/Niche | E Date Registered |
 *    F Assigned To | G Synced? | H Message
 *  F and G are left blank on every new row so the existing automation
 *  in the master sheet picks them up normally.
 ************************************************************************/

// The target spreadsheet's ID (from its URL).
var MASTER_SHEET_ID = '1wVEKynx7ApojFpa_5WFqRwLqoPproMTg8p0HdXy1sto';

// The tab website leads land in. Created automatically on first submit
// if it doesn't already exist, so a fresh sheet needs no manual setup.
var WEBSITE_LEAD_TAB = 'Website (Inloop)';

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.openById(MASTER_SHEET_ID);
    var sheet = ss.getSheetByName(WEBSITE_LEAD_TAB);
    if (!sheet) sheet = ss.insertSheet(WEBSITE_LEAD_TAB);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Name', 'Number', 'Email', 'Brand/Niche', 'Date Registered',
        'Assigned To', 'Synced?',
        'Message'
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
      '',                        // F Assigned To (left blank)
      '',                        // G Synced? (left blank)
      data.message || ''         // H Message / Needs
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

// Optional: run this once manually (Run ▶ in the editor, pick testDoPost)
// to confirm the sheet access works before deploying, without needing curl.
function testDoPost() {
  var fake = {
    postData: {
      contents: JSON.stringify({
        source: 'Manual Test',
        nameOrBrand: 'Test Lead (please delete)',
        email: 'test@example.com',
        phone: '+919999999999',
        brandOrWebsite: 'Test Brand',
        message: 'Testing the standalone script — safe to delete this row.'
      })
    }
  };
  Logger.log(doPost(fake).getContent());
}
