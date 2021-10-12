// Packages
import { Text, Highlight } from "yamiassu"

// Hooks
import useLang from "../../../hooks/useLang"

// Wraps
import DocWrap from "../../../wrappers/DocWrap"

export default function DownloadingDoc() {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	const _ = useLang("docs.starting.download")

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<DocWrap title={_("TITLE")} sidebar="starting">
			<Text>{[
				_("P1"),
				<Highlight data={`
yarn create acai
// or
npm init acai
				`} />,
			]}</Text>
		</DocWrap>
	)
}