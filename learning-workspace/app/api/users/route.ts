/* import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({
    name: 'John Doe',
  });
}
 */
export async function GET() {
  return Response.json({ users: [] });
}
export async function POST(request: Request) {
  const data = await request.json();
  return Response.json({ success: true });
}
