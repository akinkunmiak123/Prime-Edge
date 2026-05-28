import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET() {
  await sql`
    CREATE TABLE IF NOT EXISTS posts (
      id SERIAL PRIMARY KEY,
      slug TEXT UNIQUE NOT NULL,
      title TEXT NOT NULL,
      date TEXT NOT NULL,
      category TEXT DEFAULT 'General',
      excerpt TEXT DEFAULT '',
      image TEXT DEFAULT '',
      author TEXT DEFAULT 'Prime Edge Team',
      content TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `
  return NextResponse.json({ success: true })
}
