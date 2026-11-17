DTRAX POULTRY SUPPLY - OFFLINE APP
===================================

This package has two ways to use the app. Both work with no internet.
Your items and sales are saved on the device you use. They are not shared
between devices.

OPTION A: INSTALL AS AN APP (phone, tablet or PC)
-------------------------------------------------
The app has to be put on a web address (https) once so your device can
install it. After the first visit it works fully offline.

1. Upload the folder "dtrax-offline-app" to a free host. The easiest:
   - Go to app.netlify.com/drop, sign in, and drag the whole
     "dtrax-offline-app" folder onto the page. You get a web address.
   - Or use GitHub Pages or Cloudflare Pages.
2. Open that address on the device you will use at the counter. Wait for the
   page to load once while online.
3. Install it:
   - Android (Chrome): tap "Install app" at the top of the page, or the
     three-dot menu, then Add to Home screen.
   - iPhone (Safari): Share button, then Add to Home Screen.
   - Windows or Mac (Chrome or Edge): click the install icon in the address
     bar.
4. Open it from the home screen. Turn off the internet to confirm it still
   loads.

OPTION B: SINGLE FILE (no hosting, no install)
----------------------------------------------
Open "dtrax-pos-single-file.html" in Chrome or Edge on a PC or Android phone.
It works offline straight from the file. Keep the file in one place and
always open that same copy, so you see the same data.

KEEP YOUR DATA SAFE
-------------------
- Data lives in the browser on that device. Clearing browser data or
  uninstalling the app erases it.
- Back up every week or after busy days: Reports tab, "Full backup (Excel)".
- Stock can be restored or moved to another device with Stock tab,
  "Import from Excel". Sales history is in the backup file for your records
  but is not re-imported.
- Use one device per shop counter. Two devices will each have their own
  stock numbers.

EXCEL
-----
- Excel template: blank file with the right columns.
- Export to Excel: your stock with stock value and status columns.
- Import from Excel: adds new items and updates existing ones (matched by
  SKU, then name). You see a preview before anything changes.

PRINTING
--------
- Receipts: after a sale, press Print on the receipt. Paper can be a 58 mm
  roll, an 80 mm roll or A4. Set it in Reports > Shop settings, where you can
  also add your address, phone and a footer message such as "Salamat po!".
  Tick "Print the receipt right after each sale" to print automatically.
- Reports tab: "Print report" prints the selected day (A4): totals, items
  sold, receipts and items to reorder.
- Stock tab: "Print list" prints the stock shown (use the search box or
  "Needs reorder only" first to print a shorter list). "Count sheet" prints
  a list with blank Counted and Difference columns for a physical count.
- In the print window, choose your printer. For a thermal printer pick its
  name, and turn off "Headers and footers" if they show.
- The first time, check the preview. If a roll printer cuts the receipt,
  set Margins to None or Minimum in the print window.

UPDATING THE APP LATER
----------------------
This is version 2 (cache name 'dtrax-pos-v2' in sw.js). If you replace the
files with a newer version, change that number in sw.js (for example to
'dtrax-pos-v3') before uploading, so devices pick up the new files.
Your saved items and sales are kept when the app updates.

The Excel features use SheetJS (xlsx.full.min.js, Apache-2.0 licence).
