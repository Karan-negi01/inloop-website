/************************************************************************
 *  INLOOP MEDIA — LEAD ASSIGNMENT SYNC (Google Apps Script)
 *  ------------------------------------------------------------------
 *  Paste this into THIS spreadsheet (the one leads land in):
 *  Extensions → Apps Script → paste → Save.
 *
 *  What it does:
 *   1) setupDropdowns() — run once from the editor (▶ next to the
 *      function name) to add an "Assigned To" dropdown (column F) on
 *      every source tab, listing the names in EXEC_SHEETS below.
 *   2) syncAssignedLeads() — scans every source tab; any row with an
 *      Assigned To name filled in and Synced? (G) still blank gets
 *      copied into that executive's own private spreadsheet (their
 *      "My Leads" tab — created automatically if it doesn't exist),
 *      then G is marked YES so it's never copied twice.
 *      Add a time-driven trigger for this: Triggers (clock icon) →
 *      Add Trigger → syncAssignedLeads → Time-driven → every 5 min.
 *
 *  Columns each source tab is expected to have (same layout the
 *  website intake script already writes):
 *    A Name | B Number | C Email | D Brand/Niche | E Date Registered |
 *    F Assigned To | G Synced?
 ************************************************************************/

/* ====== CONFIG — edit these ====== */

// This spreadsheet's own ID (from its URL) — used explicitly instead
// of SpreadsheetApp.getActiveSpreadsheet(), which only resolves
// correctly for a script bound to this sheet via ITS OWN Extensions →
// Apps Script menu. A script created separately (e.g. from
// script.google.com directly) has no reliable "active" spreadsheet,
// so it silently resolves to nothing useful instead of erroring.
var THIS_SHEET_ID = '1wVEKynx7ApojFpa_5WFqRwLqoPproMTg8p0HdXy1sto';

// Tabs in this sheet that hold leads. Sync silently skips any tab
// name below that doesn't exist yet, so it's safe to list sources
// you haven't wired up on this sheet yet.
var SOURCE_TABS = [
  'Website (Inloop)', 'WhatsApp Business', 'Instagram DMs',
  'Meta Lead Forms', 'Meta Ads', 'LinkedIn'
];

// Map each executive name (exactly as it should appear in the
// Assigned To dropdown) to THEIR OWN spreadsheet ID (the long id in
// their personal sheet's URL).
var EXEC_SHEETS = {
  'Aryan':       '1itn7f2D1N1bHyaG52MRZ--g2ZVqF8nO6v7axzqwW3tI',
  'Avneet Kaur': '1TvKP7B0g9cv3gAXBIpaULY0l2NeO6QAOc6QAMDXE3tA'
};

// The tab name inside each executive's file where leads should land.
// Created automatically (with a header row) if it isn't there yet.
var EXEC_TAB = 'My Leads';


/* ==================================================================
 * SYNC ASSIGNED LEADS  →  executive's private sheet
 * ================================================================== */
function syncAssignedLeads() {
  var master = SpreadsheetApp.openById(THIS_SHEET_ID);

  SOURCE_TABS.forEach(function (tabName) {
    var sheet = master.getSheetByName(tabName);
    if (!sheet) return;

    var lastRow = sheet.getLastRow();
    if (lastRow < 2) return;

    // A2:G(lastRow) — 7 columns (F = Assigned To, G = Synced flag)
    var range = sheet.getRange(2, 1, lastRow - 1, 7);
    var rows  = range.getValues();

    rows.forEach(function (row, i) {
      var name          = row[0];
      var assignedTo    = row[5];
      var alreadySynced = row[6];

      if (!name || !assignedTo || alreadySynced === 'YES') return;

      var execId = EXEC_SHEETS[assignedTo];
      if (!execId) {
        Logger.log('No sheet mapped for executive: ' + assignedTo);
        return;
      }

      var execFile = SpreadsheetApp.openById(execId);
      var execTab  = execFile.getSheetByName(EXEC_TAB);
      if (!execTab) {
        execTab = execFile.insertSheet(EXEC_TAB);
        execTab.appendRow(['Name', 'Number', 'Email', 'Brand/Niche', 'Date Registered', 'Date Assigned', 'Status']);
      }

      // Exec columns: A Name|B Number|C Email|D Brand/Niche|E Date Reg|F Date Assigned|G Status
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
 * SET UP THE "ASSIGNED TO" DROPDOWN on every source tab
 * Run this once manually after adding/changing names in EXEC_SHEETS.
 * ================================================================== */
function setupDropdowns() {
  var ss = SpreadsheetApp.openById(THIS_SHEET_ID);
  var names = Object.keys(EXEC_SHEETS);
  var rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(names, true).setAllowInvalid(false).build();
  var done = [];
  SOURCE_TABS.forEach(function (t) {
    var s = ss.getSheetByName(t);
    if (s) { s.getRange('F2:F1000').setDataValidation(rule); done.push(t); }
  });
  Logger.log('Dropdown added to: ' + done.join(', '));
}
