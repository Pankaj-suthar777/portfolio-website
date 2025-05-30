import { NextRequest, NextResponse } from "next/server";
import PublicJournal from "@/models/publicJournal.model";
import connectDB from "@/config/db";
import mongoose from "mongoose";

interface Params {
  id: string;
}

const isValidObjectId = (id: string) => mongoose.Types.ObjectId.isValid(id);

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  await connectDB();
  try {
    const { id } = params;
    if (!isValidObjectId(id)) {
      return NextResponse.json({ message: "Invalid Journal ID" }, { status: 400 });
    }

    const journal = await PublicJournal.findById(id);
    if (!journal) {
      return NextResponse.json({ message: "Public journal not found" }, { status: 404 });
    }
    return NextResponse.json({ journal }, { status: 200 });
  } catch (error: any) {
    console.error(`Error fetching public journal ${params.id}:`, error);
    return NextResponse.json(
      { message: "Error fetching public journal", error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Params }
) {
  await connectDB();
  try {
    const { id } = params;
    if (!isValidObjectId(id)) {
      return NextResponse.json({ message: "Invalid Journal ID" }, { status: 400 });
    }

    const body = await request.json();
    const { title, text } = body;

    if (!title && !text) {
      return NextResponse.json(
        { message: "Title or text must be provided for update" },
        { status: 400 }
      );
    }

    const updatedJournal = await PublicJournal.findByIdAndUpdate(
      id,
      { title, text },
      { new: true, runValidators: true }
    );

    if (!updatedJournal) {
      return NextResponse.json({ message: "Public journal not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Public journal updated successfully", journal: updatedJournal },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(`Error updating public journal ${params.id}:`, error);
    return NextResponse.json(
      { message: "Error updating public journal", error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Params }
) {
  await connectDB();
  try {
    const { id } = params;
    if (!isValidObjectId(id)) {
      return NextResponse.json({ message: "Invalid Journal ID" }, { status: 400 });
    }

    const deletedJournal = await PublicJournal.findByIdAndDelete(id);

    if (!deletedJournal) {
      return NextResponse.json({ message: "Public journal not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Public journal deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(`Error deleting public journal ${params.id}:`, error);
    return NextResponse.json(
      { message: "Error deleting public journal", error: error.message },
      { status: 500 }
    );
  }
}
