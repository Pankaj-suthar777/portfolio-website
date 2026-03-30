import { NextRequest, NextResponse } from "next/server";
import PrivateJournal from "@/models/privateJournal.model";
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

    const newJournal = new PrivateJournal({ title, text });
    const savedJournal = await newJournal.save();

    return NextResponse.json(
      { message: "Private journal created successfully", journal: savedJournal },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating private journal:", error);
    return NextResponse.json(
      { message: "Error creating private journal", error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectDB();
  try {
    const journals = await PrivateJournal.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ journals }, { status: 200 });
  } catch (error) {
    console.error("Error fetching private journals:", error);
    return NextResponse.json(
      { message: "Error fetching private journals", error: (error as Error).message },
      { status: 500 }
    );
  }
}
