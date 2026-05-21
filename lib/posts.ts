import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

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
export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return []

  const fileNames = fs.readdirSync(postsDirectory)

  const posts = fileNames
    .filter((f) => f.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        category: data.category || 'General',
        excerpt: data.excerpt || '',
        image: data.image || '',
        author: data.author || 'Prime Edge Team',
        content: '',
      }
    })

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}

/* ── Get a single post by slug ── */
export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`)

  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    category: data.category || 'General',
    excerpt: data.excerpt || '',
    image: data.image || '',
    author: data.author || 'Prime Edge Team',
    content,
  }
}

/* ── Get all slugs (for static generation) ── */
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return []
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
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
export function getAllCategories(): string[] {
  const posts = getAllPosts()
  const cats = posts.map((p) => p.category)
  return ['All', ...Array.from(new Set(cats))]
}
