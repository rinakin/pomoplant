'use server';
import { google } from 'googleapis';

// GOOGLE v4 API
export async function submitWaitlist(email: string) {
  // Auth

  const auth = new google.auth.GoogleAuth({
    credentials: {
      type: process.env.GOOGLE_TYPE,
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      client_email: 'sheets-waitlist-writer@lofty-bolt-464318-i5.iam.gserviceaccount.com',
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const now = new Date();
  const dateStr = now.toLocaleDateString();
  const timeStr = now.toLocaleTimeString();
  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: 'Waitlist!A:C',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[email, dateStr, timeStr]],
      },
    });

    return { success: true };
  } catch {
    return { success: false };
  }
}
