import { sql } from '@vercel/postgres'

export type Post = {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  image: string
  author: string
  content: string
}

export type PostMeta = Omit<Post, 'content'>

/* ── Get all posts sorted by date ── */
export async function getAllPosts(): Promise<PostMeta[]> {
  try {
    const { rows } = await sql`
      SELECT slug, title, date, category, excerpt, image, author
      FROM posts
      ORDER BY date DESC
    `
    return rows as PostMeta[]
  } catch (error) {
    console.error('getAllPosts error:', error)
    return []
  }
}

/* ── Get a single post by slug ── */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const { rows } = await sql`
      SELECT * FROM posts WHERE slug = ${slug} LIMIT 1
    `
    return (rows[0] as Post) || null
  } catch (error) {
    console.error('getPostBySlug error:', error)
    return null
  }
}

/* ── Get all slugs (for static generation) ── */
export async function getAllPostSlugs(): Promise<string[]> {
  try {
    const { rows } = await sql`SELECT slug FROM posts`
    return rows.map((r) => r.slug)
  } catch (error) {
    console.error('getAllPostSlugs error:', error)
    return []
  }
}

/* ── Format date nicely ── */
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/* ── Get unique categories ── */
export async function getAllCategories(): Promise<string[]> {
  try {
    const { rows } = await sql`SELECT DISTINCT category FROM posts`
    const cats = rows.map((r) => r.category)
    return ['All', ...cats]
  } catch (error) {
    console.error('getAllCategories error:', error)
    return ['All']
  }
}
