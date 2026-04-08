import connectDB from "@/config/db";
import {
  getRequestIpAddress,
  getRequestUserAgent,
  shouldExcludeViewByIp,
} from "@/lib/view-tracking";
import BlogView from "@/models/blogView.model";
import PortfolioVisit from "@/models/portfolioVisit.model";
import { NextRequest, NextResponse } from "next/server";

interface PortfolioViewPayload {
  path?: string;
}

export async function GET() {
  try {
    await connectDB();
    const [portfolioViews, blogViews] = await Promise.all([
      PortfolioVisit.countDocuments(),
      BlogView.countDocuments(),
    ]);
    const totalViews = portfolioViews + blogViews;

    return NextResponse.json(
      { totalViews, portfolioViews, blogViews },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching portfolio views:", error);
    return NextResponse.json(
      {
        message: "Error fetching portfolio views",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json().catch(() => ({}))) as
      | PortfolioViewPayload
      | undefined;
    const path =
      typeof payload?.path === "string" && payload.path.startsWith("/")
        ? payload.path
        : "/";
    const ipAddress = getRequestIpAddress(request);

    if (shouldExcludeViewByIp(ipAddress)) {
      return NextResponse.json({ tracked: false }, { status: 200 });
    }

    await connectDB();
    await PortfolioVisit.create({
      ipAddress,
      path,
      userAgent: getRequestUserAgent(request),
    });

    return NextResponse.json({ tracked: true }, { status: 201 });
  } catch (error) {
    console.error("Error tracking portfolio view:", error);
    return NextResponse.json(
      {
        message: "Error tracking portfolio view",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
