import dbConnect from '@/lib/db';
import Property from '@/models/Property';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    await dbConnect();
    const { id } = await params;

    try {
        const property = await Property.findById(id);
        if (!property) {
            return NextResponse.json({ success: false, error: 'Property not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: property });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

export async function PUT(request, { params }) {
    await dbConnect();
    const { id } = await params;

    try {
        const body = await request.json();
        const property = await Property.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });
        if (!property) {
            return NextResponse.json({ success: false, error: 'Property not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: property });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

export async function DELETE(request, { params }) {
    await dbConnect();
    const { id } = await params;

    try {
        const deletedProperty = await Property.deleteOne({ _id: id });
        if (!deletedProperty) {
            return NextResponse.json({ success: false, error: 'Property not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
