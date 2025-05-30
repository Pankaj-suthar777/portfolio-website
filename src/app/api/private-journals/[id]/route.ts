import { NextRequest, NextResponse } from "next/server";
import PrivateJournal from "@/models/privateJournal.model";
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

    const journal = await PrivateJournal.findById(id);
    if (!journal) {
      return NextResponse.json({ message: "Private journal not found" }, { status: 404 });
    }
    return NextResponse.json({ journal }, { status: 200 });
  } catch (error: any) {
    console.error(`Error fetching private journal ${params.id}:`, error);
    return NextResponse.json(
      { message: "Error fetching private journal", error: error.message },
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

    const updatedJournal = await PrivateJournal.findByIdAndUpdate(
      id,
      { title, text },
      { new: true, runValidators: true }
    );

    if (!updatedJournal) {
      return NextResponse.json({ message: "Private journal not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Private journal updated successfully", journal: updatedJournal },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(`Error updating private journal ${params.id}:`, error);
    return NextResponse.json(
      { message: "Error updating private journal", error: error.message },
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

    const deletedJournal = await PrivateJournal.findByIdAndDelete(id);

    if (!deletedJournal) {
      return NextResponse.json({ message: "Private journal not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Private journal deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(`Error deleting private journal ${params.id}:`, error);
    return NextResponse.json(
      { message: "Error deleting private journal", error: error.message },
      { status: 500 }
    );
  }
}
