import fs from 'fs'
import grayMatter from 'gray-matter'

import MdToHtml from './markdownToHtml'

type MdFilesProps = 'blog' | 'examples' | 'docs'

const getMdFileBySlug = (path: MdFilesProps, slug: string) => {
  const mdFileBySlug = fs.readFileSync(
    `./src/contents/_${path}/${slug}.md`,
    'utf-8'
  )

  const { content, data } = grayMatter(mdFileBySlug)

  const htmlContent = MdToHtml(content)

  return {
    metas: {
      ...data,
      slug
    },
    content: htmlContent
  }
}

export default getMdFileBySlug
