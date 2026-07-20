import { NextResponse } from "next/server";
import { fetchMultiTagArticles } from "@/lib/devto";

export async function GET() {
  const articles = await fetchMultiTagArticles(12);
  return NextResponse.json(articles);
}
