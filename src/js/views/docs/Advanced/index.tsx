// Packages
import { Text } from "yamiassu"

// Hooks
import useLang from "../../../hooks/useLang"

// Wraps
import DocWrap from "../../../wrappers/DocWrap"

export default function AdvancedDoc() {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	const _ = useLang("doc.advanced")

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<DocWrap title={_("TITLE")} sidebar="advanced">
			<Text>{[
				_("P1"),
			]}</Text>
		</DocWrap>
	)
}