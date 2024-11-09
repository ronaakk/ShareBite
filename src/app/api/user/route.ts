import { NextResponse } from 'next/server';
import { mongooseConnect } from '@/lib/mongoose';
import { User } from '@/models/User';
import { getSession } from '@auth0/nextjs-auth0';

export async function GET(request: Request) {
  try {
    await mongooseConnect();
    
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    
    // Get the current session
    const session = await getSession();
    
    // Check if user is authenticated
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (email) {
      const user = await User.findOne({ email });
      return NextResponse.json({ exists: !!user });
    }

    // Only allow admin users to fetch all users
    if (session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const users = await User.find({});
    return NextResponse.json(users);
  } catch (error) {
    console.error('User API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}