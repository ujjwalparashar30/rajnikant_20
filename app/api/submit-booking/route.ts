import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import path from 'path';
import { promises as fs } from 'fs';

// Set your Google Sheet ID and the range where you want to append data
const SHEET_ID = process.env.GOOGLE_SHEET_ID || '10s1YA4HF8Lt9ueohXUbJuLxX0IuQ2U1ckEUqJDOFd8Q';
const SHEET_RANGE = 'A1'; // Change as needed

async function getGoogleAuth() {
  let credentials;
  if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
    credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
  } else {
    // fallback to local file for development
    const credentialsPath = path.join(process.cwd(), 'google-service-account.json');
    const credentialsRaw = await fs.readFile(credentialsPath, 'utf-8');
    credentials = JSON.parse(credentialsRaw);
  }

  const scopes = [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive',
  ];

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes,
  });
  return auth;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // Validate body as needed
    // Example: const { name, email, message } = body;

    const auth = await getGoogleAuth();
    const sheets = google.sheets({ version: 'v4', auth });

    // Prepare the row to append (customize as per your form fields)
    const row = [
      new Date().toISOString(),
      ...(Array.isArray(body) ? body : Object.values(body)),
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: SHEET_RANGE,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [row],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const err = error as Error;
    console.error('Google Sheets API error:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export const dynamic = 'force-dynamic'; // Ensure this API route is always dynamic
