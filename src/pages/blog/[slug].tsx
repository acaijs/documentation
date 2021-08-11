import Container from "components/Container"
import { GetStaticProps } from "next"

import getMdFileBySlug from "utils/getMdBySlug"
import getAllMdFiles from "utils/getMdFiles"

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const post = getMdFileBySlug("blog", (params as any).slug || "index")

	return {
		props: {
			post,
		},
	}
}

export const getStaticPaths = async () => {
	const posts = getAllMdFiles("blog")

	return {
		paths: posts.map((post) => {
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
  post: any;
}

const BlogPostPage = ({ post }: BlogPostPageProps) => {
	return (
		<Container>
			<div dangerouslySetInnerHTML={{ __html: post.content }} />
		</Container>
	)
}

export default BlogPostPage
