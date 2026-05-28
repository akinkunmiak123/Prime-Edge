import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params

    const { rowCount } = await sql`
      DELETE FROM posts WHERE slug = ${slug}
    `

    if (rowCount === 0) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete post error:', error)
    return NextResponse.json(
      { error: 'Failed to delete post' },
      { status: 500 },
    )
  }
}
