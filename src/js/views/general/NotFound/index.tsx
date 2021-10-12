// Packages
import { Grid, Title } from "yamiassu"

// Hooks
import useLang from "../../../hooks/useLang"

export default function NotFound() {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLang("general")

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Grid container>
			<Title>{_("NOT_FOUND")}</Title>
		</Grid>
	)
}