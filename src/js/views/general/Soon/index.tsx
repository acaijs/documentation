// Packages
import { Grid, Title } from "yamiassu"

// Hooks
import useLang from "../../../hooks/useLang"

export default function Soon() {
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
			<Title>{_("SOON")}</Title>
		</Grid>
	)
}