import { NextRequest, NextResponse } from 'next/server'
import { Pool } from '@neondatabase/serverless'
import { del } from '@vercel/blob'

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL || process.env.VERCEL_POSTGRES_URL || '',
})

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params

    const postResult = await pool.query(
      'SELECT image FROM posts WHERE slug = $1 LIMIT 1',
      [slug],
    )

    if (postResult.rowCount === 0) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    const imageUrl = postResult.rows[0].image as string | null

    if (imageUrl) {
      try {
        await del(imageUrl, {
          token: process.env.BLOB_READ_WRITE_TOKEN,
        })
      } catch (blobError) {
        console.error('Blob delete error:', blobError)
        // Continue to delete the DB row even if the blob delete fails.
      }
    }

    const deleteResult = await pool.query('DELETE FROM posts WHERE slug = $1', [
      slug,
    ])

    if (deleteResult.rowCount === 0) {
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
