import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import slugify from 'slugify'

const postsDirectory = path.join(process.cwd(), 'content/posts')

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

    // Generate slug from title
    const slug = slugify(title, {
      lower: true,
      strict: true,
      trim: true,
    })

    // Build frontmatter
    const frontmatter = `---
title: "${title.replace(/"/g, "'")}"
date: "${date || new Date().toISOString().split('T')[0]}"
category: "${category || 'General'}"
excerpt: "${excerpt?.replace(/"/g, "'") || ''}"
image: "${image || ''}"
author: "${author || 'Prime Edge Team'}"
---

${content}`

    // Ensure directory exists
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true })
    }

    const filePath = path.join(postsDirectory, `${slug}.md`)
    fs.writeFileSync(filePath, frontmatter, 'utf8')

    return NextResponse.json({ success: true, slug })
  } catch (error) {
    console.error('Save post error:', error)
    return NextResponse.json({
       error: 'Failed to save post this messeage is from the api'
       }, { status: 500 })
  }
}
