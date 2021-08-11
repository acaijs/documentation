import { GetStaticProps } from "next"

import DocsLayout from "layouts/Docs"

import getMdFileBySlug from "utils/getMdBySlug"
import getAllMdFiles from "utils/getMdFiles"

export const getStaticProps: GetStaticProps = async ({ params, language }: any) => {
	const doc = getMdFileBySlug("docs", (params as any).slug, language)

	return {
		props: {
			doc,
		},
	}
}

export const getStaticPaths = async () => {
	const docs = getAllMdFiles("docs")

	return {
		paths: docs.map((post) => {
			return {
				params: {
					slug: post.metas.slug,
				},
			}
		}),
		fallback: false,
	}
}

type BlogPostPageProps = {
  doc: any;
}

const BlogPostPage = ({ ...props }: BlogPostPageProps) => {
	return <DocsLayout {...props} />
}

export default BlogPostPage
