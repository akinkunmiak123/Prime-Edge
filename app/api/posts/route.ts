import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import slugify from 'slugify'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { title, date, category, excerpt, author, content, image } = body

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 },
      )
    }

    const slug = slugify(title, { lower: true, strict: true, trim: true })

    await sql`
      INSERT INTO posts (slug, title, date, category, excerpt, image, author, content)
      VALUES (${slug}, ${title}, ${date}, ${category}, ${excerpt}, ${image}, ${author}, ${content})
      ON CONFLICT (slug) DO UPDATE SET
        title = ${title},
        date = ${date},
        category = ${category},
        excerpt = ${excerpt},
        image = ${image},
        author = ${author},
        content = ${content}
    `

    return NextResponse.json({ success: true, slug })
  } catch (error) {
    console.error('Save post error:', error)
    return NextResponse.json({ error: 'Failed to save post' }, { status: 500 })
  }
}
