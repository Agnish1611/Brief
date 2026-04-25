// TODO: Implement auth protection for dashboard routes
// Protect: /dashboard/:path*
// Redirect unauthenticated users to /login
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default function proxy(request: NextRequest) {
  return NextResponse.next()
}
