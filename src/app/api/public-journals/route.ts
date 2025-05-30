import { NextRequest, NextResponse } from "next/server";
import PublicJournal from "@/models/publicJournal.model";
import connectDB from "@/config/db";

export async function POST(request: NextRequest) {
  await connectDB();
  try {
    const body = await request.json();
    const { title, text } = body;

    if (!title || !text) {
      return NextResponse.json(
        { message: "Title and text are required" },
        { status: 400 }
      );
    }

    const newJournal = new PublicJournal({ title, text });
    const savedJournal = await newJournal.save();

    return NextResponse.json(
      { message: "Public journal created successfully", journal: savedJournal },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating public journal:", error);
    return NextResponse.json(
      { message: "Error creating public journal", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  await connectDB();
  try {
    const journals = await PublicJournal.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ journals }, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching public journals:", error);
    return NextResponse.json(
      { message: "Error fetching public journals", error: error.message },
      { status: 500 }
    );
  }
}
