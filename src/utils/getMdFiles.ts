import fs from "fs"
import grayMatter from "gray-matter"

import MdToHtml from "./markdownToHtml"

type MdFilesProps = "blog" | "examples" | "docs"

const getAllMdFiles = (path: MdFilesProps) => {
	const allMdFileNames = fs.readdirSync(`./src/contents/_${path}`)

	return allMdFileNames
		.map((filename) => {
			const fileContent = fs.readFileSync(
				`./src/contents/_${path}/${filename}`,
				"utf-8",
			)
			const { content, data } = grayMatter(fileContent)

			const htmlContent = MdToHtml(content)

			return {
				metas: {
					...data,
					slug: filename.replace(".md", ""),
				},
				content: htmlContent,
			}
		})
		.sort((post1: any, post2: any) =>
			post1.metas.date - post2.metas.date ? -1 : 1,
		)
}

export default getAllMdFiles
