import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import PostType from '@/types/post'

const postsDirectory = join(process.cwd(), '_thoughts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string): PostType {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  

  return {
    ...data,
    slug: realSlug,
    content,
  } as PostType
}

export function getAllPosts(): PostType[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}