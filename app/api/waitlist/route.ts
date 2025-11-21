import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function POST(request: Request) {
  try {
    const { email, source } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Load credentials from env (preferred for deployments) or local file fallback
    const credentialsSource =
      process.env.GOOGLE_SERVICE_ACCOUNT_JSON ??
      fs.readFileSync(path.join(process.cwd(), 'google-credentials.json'), 'utf8');
    const credentials = JSON.parse(credentialsSource);

    // Set up Google Sheets authentication
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!spreadsheetId) {
      throw new Error('GOOGLE_SHEET_ID is not configured');
    }

    // Check for duplicates anywhere in Sheet1 row data
    const existingValues = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Sheet1!A:Z',
      majorDimension: 'ROWS',
    });

    const normalizedEmail = email.trim().toLowerCase();
    const existingEmails =
      existingValues.data.values
        ?.flat()
        .filter((value): value is string => typeof value === 'string')
        .map((value) => value.trim().toLowerCase())
        .filter(Boolean) ?? [];

    const hasDuplicate = existingEmails.includes(normalizedEmail);

    if (hasDuplicate) {
      return NextResponse.json(
        { error: 'You are already on the waitlist.' },
        { status: 409 }
      );
    }

    // Prepare the row data
    const timestamp = new Date().toISOString();
    const values = [[email, timestamp, source || 'form']];

    // Append the data to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:C', // Adjust if your sheet has a different name
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    return NextResponse.json(
      { success: true, message: 'Successfully joined waitlist!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    return NextResponse.json(
      { error: 'Failed to join waitlist. Please try again.' },
      { status: 500 }
    );
  }
}
