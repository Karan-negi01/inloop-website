/************************************************************************
 *  INLOOP MEDIA — MASTER SHEET FORMATTING
 *  ------------------------------------------------------------------
 *  One-off polish pass for the "Website (Inloop)" tab: dark header,
 *  frozen header row, alternating row banding, borders, sane column
 *  widths, and status colors on Assigned To / Synced?.
 *
 *  Add this as a third file in the "Master Inloop" Apps Script
 *  project (Files → + → Script → name it Formatting), paste in,
 *  then run formatMasterSheet() once. Safe to re-run any time —
 *  it just re-applies the same formatting.
 ************************************************************************/

function formatMasterSheet() {
  var ss = SpreadsheetApp.openById(THIS_SHEET_ID);
  var sheet = ss.getSheetByName('Website (Inloop)');
  if (!sheet) { Logger.log('Tab "Website (Inloop)" not found'); return; }

  var lastCol = Math.max(sheet.getLastColumn(), 8); // A..H
  var lastRow = Math.max(sheet.getLastRow(), 2);

  // ---- header row ----
  var header = sheet.getRange(1, 1, 1, lastCol);
  header.setBackground('#0d0d0f')
        .setFontColor('#ffffff')
        .setFontWeight('bold')
        .setFontSize(10)
        .setVerticalAlignment('middle')
        .setHorizontalAlignment('center');
  sheet.setRowHeight(1, 34);
  sheet.setFrozenRows(1);
  sheet.setFrozenColumns(1);

  // ---- column widths (A..H) ----
  var widths = [160, 120, 190, 150, 140, 110, 90, 340];
  widths.forEach(function (w, i) { sheet.setColumnWidth(i + 1, w); });

  // ---- borders + banding across the data range ----
  var full = sheet.getRange(1, 1, lastRow, lastCol);
  full.setBorder(true, true, true, true, true, true, '#e3e3e6', SpreadsheetApp.BorderStyle.SOLID);

  // clear any existing banding before re-applying (avoids "range already banded" error on re-run)
  sheet.getBandings().forEach(function (b) { b.remove(); });
  if (lastRow > 1) {
    var body = sheet.getRange(2, 1, lastRow - 1, lastCol);
    var banding = body.applyRowBanding(SpreadsheetApp.BandingTheme.LIGHT_GREY, false, false);
    banding.setHeaderRowColor(null).setFirstRowColor('#ffffff').setSecondRowColor('#f7f7f9');
  }

  // ---- body row styling ----
  sheet.getRange(2, 1, lastRow - 1, lastCol)
       .setFontSize(10)
       .setVerticalAlignment('middle');

  // ---- conditional formatting: Synced? (G) and Assigned To (F) ----
  sheet.clearConditionalFormatRules();
  var rules = [];
  var fRange = sheet.getRange(2, 6, lastRow - 1, 1); // F
  var gRange = sheet.getRange(2, 7, lastRow - 1, 1); // G

  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo('YES')
    .setBackground('#e6f4ea').setFontColor('#137333').setBold(true)
    .setRanges([gRange]).build());

  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied('=AND(F2<>"", G2<>"YES")')
    .setBackground('#fef7e0').setFontColor('#b06000')
    .setRanges([fRange]).build());

  sheet.setConditionalFormatRules(rules);

  Logger.log('Formatted "Website (Inloop)" — ' + lastRow + ' rows, ' + lastCol + ' cols.');
}
