import Link from "next/link"

import Container from "components/Container"
import Heading from "components/Heading"

import * as S from "./styles"

type BlogLayoutProps = {
  posts?: any[];
}

const BlogLayout = ({ posts }: BlogLayoutProps) => {
	return (
		<Container>
			<S.Wrapper>
				{posts?.map((post) => (
					<Link
						key={post.metas.slug}
						as={`/blog/${post.metas.slug}`}
						href="/blog/[slug]"
						passHref
					>
						<a>
							<Heading>{post.metas.title}</Heading>

							<p>{post.metas.date}</p>

							<p>{post.metas.excerpt}</p>
						</a>
					</Link>
				))}
			</S.Wrapper>
		</Container>
	)
}

export default BlogLayout
