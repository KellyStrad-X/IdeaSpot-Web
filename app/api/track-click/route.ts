import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const { action, source } = body;

  // This will show up in Vercel logs
  console.log(`[CLICK] Action: ${action || 'download'}, Source: ${source || 'unknown'}, Time: ${new Date().toISOString()}`);

  return NextResponse.json({ success: true });
}
