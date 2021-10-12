// Packages
import { Link } from "react-router-dom"
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
				{
					type: "title",
					data: _("T1"),
				},
				_("P2"),
				<Link to="/docs/starting/b/download">{_("L1")}</Link>,
				{
					type: "title",
					data: _("T2"),
				},
				_("P3"),
				<Link to="/docs/starting/z/starting">{_("L2")}</Link>,
			]}</Text>
		</DocWrap>
	)
}