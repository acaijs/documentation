import remark from 'remark'

import remarkHTML from 'remark-html'

const MdToHtml = (markdown: string) => {
  const result = remark().use(remarkHTML).processSync(markdown)

  return result.toString()
}

export default MdToHtml
