import { NextResponse } from "next/server";
import webDevRoadmap from "@/data/roadmaps/web-dev";

export async function GET() {
  return NextResponse.json({ roadmap: webDevRoadmap });
}
