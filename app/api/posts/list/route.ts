import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const { rows } = await sql`
      SELECT slug, title, date, category, excerpt, image, author
      FROM posts
      ORDER BY date DESC
    `
    return NextResponse.json({ posts: rows })
  } catch (error) {
    console.error('List posts error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 },
    )
  }
}
