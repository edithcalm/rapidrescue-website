# Google Apps Script Integration Setup Guide

## Overview
This integration connects the Rapid Rescue website waitlist form to a Google Spreadsheet using Google Apps Script webhooks.

## Files Created
- `google-apps-script.js` - Contains the Google Apps Script code
- Updated `src/pages/Waitlist.js` - Form submission now sends data to Google Apps Script
- Updated `src/scripts.js` - Added real-time count fetching functionality

## Setup Instructions

### 1. Create Google Apps Script
1. Go to [script.google.com](https://script.google.com)
2. Click "New Project"
3. Delete the default code
4. Copy and paste the contents of `google-apps-script.js`

### 2. Deploy as Web App
1. In Google Apps Script editor, click "Deploy" > "New deployment"
2. Click "Select type" > "Web app"
3. Configure:
   - **Description**: "Rapid Rescue Waitlist Webhook"
   - **Execute as**: "Me" (your Google account)
   - **Who has access**: "Anyone" (required for public website access)
4. Click "Deploy"
5. Copy the Web app URL - this should match: `https://script.google.com/macros/s/AKfycby9NnUgDmKaqIxLk3fEoJS3VyW9ysq10gSBzSxUiabj4BjyOG4T8pIp2J9bZAPn9n92IQ/exec`

### 3. Initialize Spreadsheet
1. In the Google Apps Script editor, run the `setupSpreadsheet()` function
2. This will create a "Waitlist" sheet with proper headers
3. Grant permissions when prompted

### 4. Test the Integration
1. Open your website and go to the waitlist page
2. Fill out the form and submit
3. Check the Google Spreadsheet - new entries should appear
4. The user count should update in real-time on the website

## Features

### Form Data Collection
- Name, Email, Phone, Organization, Interest type
- Automatic timestamp
- Data validation and error handling

### Real-time Count
- Live user count displayed on website
- Fetches actual count from spreadsheet
- Falls back to local storage if webhook unavailable
- Animated counter updates

### Data Structure
Spreadsheet columns:
- Timestamp (ISO format)
- Name
- Email  
- Phone
- Organization
- Interest

## Security Notes
- The webhook URL is public - anyone can submit data
- Consider adding CAPTCHA if needed
- Regularly review the spreadsheet data
- The Google Apps Script runs under your account permissions

## Troubleshooting

### Form Not Submitting
- Check the webhook URL in Waitlist.js matches your deployment
- Ensure Google Apps Script is deployed as "Anyone" access
- Check browser console for errors

### Count Not Updating
- Verify the JSONP callback is working
- Check network requests in browser dev tools
- Ensure the spreadsheet has the "Waitlist" sheet

### Permissions Issues
- Re-deploy the web app with correct permissions
- Run setupSpreadsheet() function again
- Check Google Apps Script execution logs

## API Endpoints

### POST - Submit Form Data
```
POST https://script.google.com/macros/s/YOUR_ID/exec
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "organization": "Company Name",
  "interest": "individual",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

### GET - Get User Count (JSONP)
```
GET https://script.google.com/macros/s/YOUR_ID/exec?action=getCount&callback=callback_123

Response:
callback_123({
  "status": "success",
  "count": 42,
  "timestamp": "2024-01-01T12:00:00.000Z"
})
```

## Maintenance
- Monitor the spreadsheet for spam entries
- Back up the data regularly
- Update the Google Apps Script if needed
- Test the integration periodically
