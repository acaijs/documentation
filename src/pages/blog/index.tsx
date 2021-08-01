import { GetStaticProps } from 'next'

import BlogLayout from 'layouts/Blog'

import getAllMdFiles from 'utils/getMdFiles'

export const getStaticProps: GetStaticProps = () => {
  const posts = getAllMdFiles('blog')

  return {
    props: {
      posts
    }
  }
}

const BlogHomePage = ({ ...props }) => {
  return <BlogLayout {...props} />
}

export default BlogHomePage
