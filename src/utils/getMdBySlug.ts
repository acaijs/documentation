import fs from "fs"
import grayMatter from "gray-matter"

import MdToHtml from "./markdownToHtml"

const getFilePath = (path: string, slug: string, language?: string) => {
	if (language && fs.existsSync(`./src/contents/_${path}/${language}/${slug}.md`)) return `./src/contents/_${path}/${language}/${slug}.md`

	return `./src/contents/_${path}/${slug}.md`
}

const getMdFileBySlug = (path: "blog" | "examples" | "docs", slug: string, language?: string) => {
	const mdFileBySlug = fs.readFileSync(getFilePath(path, slug, language), "utf-8")

	const { content, data } = grayMatter(mdFileBySlug)

	const htmlContent = MdToHtml(content)

	return {
		metas: {
			...data,
			slug,
		},
		content: htmlContent,
	}
}

export default getMdFileBySlug
