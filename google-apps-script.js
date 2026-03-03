// Google Apps Script Webhook Integration
// This file contains the server-side Google Apps Script code

// Global variables
const SHEET_NAME = "Waitlist";
const SHEET_HEADERS = ["Timestamp", "Name", "Email", "Phone", "City", "Interest"];

// doPost function - This handles incoming POST requests from the website
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Validate required fields
    if (!data.name || !data.email) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "Name and email are required"
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Get or create the spreadsheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      // Auto-setup if sheet doesn't exist
      setupSpreadsheet();
      sheet = ss.getSheetByName(SHEET_NAME);
    }
    
    // Append new row with form data
    const newRow = [
      data.timestamp || new Date().toISOString(),
      data.name || "",
      data.email || "",
      data.phone || "",
      data.city || "",
      data.interest || ""
    ];
    
    sheet.appendRow(newRow);
    
    // Format the new row for better readability
    const lastRow = sheet.getLastRow();
    const newRowRange = sheet.getRange(lastRow, 1, 1, newRow.length);
    newRowRange.setBackground("#ffffff");
    
    // Add alternating row colors
    if (lastRow % 2 === 0) {
      newRowRange.setBackground("#f8f9fa");
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Data saved successfully",
      rowCount: lastRow
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log("Error in doPost: " + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// doGet function - This handles GET requests for getting the count
function doGet(e) {
  try {
    const action = e.parameter.action;
    const callback = e.parameter.callback;
    
    if (action === "getCount") {
      // Get current waitlist count
      const ss = SpreadsheetApp.getActiveSpreadsheet();
      const sheet = ss.getSheetByName(SHEET_NAME);
      
      let count = 0;
      if (sheet) {
        count = sheet.getDataRange().getNumRows() - 1; // Exclude header row
        count = Math.max(0, count);
      }
      
      const responseData = {
        status: "success",
        count: count,
        timestamp: new Date().toISOString()
      };
      
      // Return as JSONP if callback is provided, otherwise as regular JSON
      if (callback) {
        return ContentService.createTextOutput(callback + '(' + JSON.stringify(responseData) + ')')
          .setMimeType(ContentService.MimeType.JAVASCRIPT);
      } else {
        return ContentService.createTextOutput(JSON.stringify(responseData))
          .setMimeType(ContentService.MimeType.JSON);
      }
    }
    
    // Default response
    const errorResponse = {
      status: "error",
      message: "Invalid action"
    };
    
    if (callback) {
      return ContentService.createTextOutput(callback + '(' + JSON.stringify(errorResponse) + ')')
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    } else {
      return ContentService.createTextOutput(JSON.stringify(errorResponse))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
  } catch (error) {
    Logger.log("Error in doGet: " + error.toString());
    const errorResponse = {
      status: "error",
      message: error.toString()
    };
    
    const callback = e.parameter.callback;
    if (callback) {
      return ContentService.createTextOutput(callback + '(' + JSON.stringify(errorResponse) + ')')
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    } else {
      return ContentService.createTextOutput(JSON.stringify(errorResponse))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }
}

// Setup function - Run this once manually to create the sheet
function setupSpreadsheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  
  // Clear existing data
  sheet.clear();
  
  // Set headers
  const headers = [
    "Timestamp",
    "Name", 
    "Email",
    "Phone",
    "City",
    "Interest"
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers])
    .setFontWeight("bold")
    .setBackground("#f3f4f6");
  
  // Auto-resize columns
  sheet.autoResizeColumns(1, headers.length);
  
  // Freeze header row
  sheet.setFrozenRows(1);
  
  // Add conditional formatting for better readability
  const range = sheet.getRange("A2:F");
  range.setBackground("#f8f9fa");
  
  Logger.log("Spreadsheet setup complete!");
}

// Function to get all data (for testing/admin purposes)
function getAllData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    return "No data found";
  }
  
  const data = sheet.getDataRange().getValues();
  return JSON.stringify(data);
}
