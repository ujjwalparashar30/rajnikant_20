import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import path from 'path';
import { promises as fs } from 'fs';

const SHEET_ID = process.env.GOOGLE_SHEET_ID || '10s1YA4HF8Lt9ueohXUbJuLxX0IuQ2U1ckEUqJDOFd8Q';
const SHEET_RANGE = 'A1';

async function getGoogleAuth() {
  let credentials;

  if (process.env.GOOGLE_SERVICE_ACCOUNT_BASE64) {
    console.log('Using base64-encoded credentials');
    // Decode base64-encoded credentials for production
    const decoded = Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT_BASE64, 'base64').toString('utf8');
    credentials = JSON.parse(decoded);
  } else {
    // Fallback to file for local development
    const filePath = path.join(process.cwd(), 'google-service-account.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    credentials = JSON.parse(fileContents);
  }

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
      'https://www.googleapis.com/auth/drive',
    ],
  });

  return auth;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const auth = await getGoogleAuth();
    const sheets = google.sheets({ version: 'v4', auth });

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

export const dynamic = 'force-dynamic';
