import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default withMiddlewareAuthRequired(async function middleware(req: NextRequest) {
  try {
    // Get the current path
    const path = req.nextUrl.pathname;

    // Skip middleware for API routes and public routes
    if (
      path.startsWith('/api') ||
      path === '/login' ||
      path === '/select-role'
    ) {
      return NextResponse.next();
    }

    // Get the user's session
    const response = await fetch(`${req.nextUrl.origin}/api/auth/me`, {
      headers: req.headers
    });
    
    const user = await response.json();

    // If no user, redirect to login
    if (!user || !user.email) {
      return NextResponse.redirect(new URL('/api/auth/login', req.url));
    }

    // Check if user exists in MongoDB
    const dbCheck = await fetch(`${req.nextUrl.origin}/api/user?email=${user.email}`, {
      headers: req.headers
    });
    const dbUser = await dbCheck.json();

    // If user doesn't exist in DB and not already heading to select-role
    if (!dbUser.exists && path !== '/select-role') {
      return NextResponse.redirect(new URL('/select-role', req.url));
    }

    // If user exists in DB and trying to access select-role
    if (dbUser.exists && path === '/select-role') {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error('Middleware error:', error);
    return NextResponse.redirect(new URL('/error', req.url));
  }
});

export const config = {
  matcher: ['/dashboard']
};