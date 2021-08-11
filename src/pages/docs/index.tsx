import { GetStaticProps } from "next"

import DocsLayout from "layouts/Docs"

import getMdFileBySlug from "utils/getMdBySlug"

export const getStaticProps: GetStaticProps = async (props) => {
	const doc = getMdFileBySlug("docs", "index", (props as any).locale)

	return {
		props: {
			doc,
		},
	}
}

type BlogPostPageProps = {
  doc: any;
}

const BlogPostPage = ({ ...props }: BlogPostPageProps) => {
	return <DocsLayout {...props} />
}

export default BlogPostPage
