// Packages
import { Text } from "yamiassu"

// Hooks
import useLang from "../../../hooks/useLang"

// Wraps
import DocWrap from "../../../wrappers/DocWrap"

export default function StartingDoc() {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	const _ = useLang("doc.starting")

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<DocWrap title={_("TITLE")} sidebar="starting">
			<Text>{[
				_("P1"),
			]}</Text>
		</DocWrap>
	)
}