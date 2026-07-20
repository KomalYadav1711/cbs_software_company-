import { NextResponse } from "next/server";
import { fetchArticleById } from "@/lib/devto";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const article = await fetchArticleById(Number(id));
  if (!article) {
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }
  return NextResponse.json(article);
}
