import dbConnect from '@/lib/db';
import Owner from '@/models/Owner';
import { NextResponse } from 'next/server';

export async function POST(request) {
    await dbConnect();

    try {
        const { username, password } = await request.json();

        // 1. Check if DB has any owners. If not, treat this as detailed setup or verify against default 'admin'/'admin'
        // Strategy: First time login allows creating the user if correct 'secret' or just creates 'admin'.
        // Better: Check if user exists.

        let user = await Owner.findOne({ username });

        // AUTO-SEED for Skeleton: If NO users exist in DB, create 'admin/admin' automatically on first try with those creds.
        const count = await Owner.countDocuments();
        if (count === 0 && username === 'admin' && password === 'admin') {
            user = await Owner.create({ username: 'admin', password: 'admin' }); // Unsecured for skeletal demo
            return NextResponse.json({ success: true, user: { username: user.username } });
        }

        if (!user) {
            return NextResponse.json({ success: false, error: 'Usuario no encontrado' }, { status: 401 });
        }

        // In real app: bcrypt.compare(password, user.password)
        if (user.password !== password) {
            return NextResponse.json({ success: false, error: 'Contraseña incorrecta' }, { status: 401 });
        }

        // Login successful
        return NextResponse.json({ success: true, user: { username: user.username } });

    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
