// Packages
import { Button, Dropdown, Grid } from "yamiassu"

// Img
import logoImg from "../../../img/logo.svg"

// Hooks
import useLang from "../../hooks/useLang"

export default function Navbar() {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLang("navbar")

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Grid container vertical="center">
			<img src={logoImg} style={{ width: "30px" }} />

			<div>
				<Button to="/">{_("HOME")}</Button>
				<Dropdown label={_("DOCS")}>
					<Dropdown.Item to="/docs/starting">{_("STARTING")}</Dropdown.Item>
					<Dropdown.Item to="/docs/database">{_("DATABASE")}</Dropdown.Item>
					<Dropdown.Item to="/docs/modules">{_("MODULES")}</Dropdown.Item>
					<Dropdown.Item to="/docs/advanced">{_("ADVANCED")}</Dropdown.Item>
				</Dropdown>
				<Button to="/blog">{_("BLOG")}</Button>
			</div>

			<Dropdown label={_("LANGUAGE")}>
				<Dropdown.Item onClick={() => _.setCurr("pt-BR")}>{_("PORTUGUESE")}</Dropdown.Item>
				<Dropdown.Item onClick={() => _.setCurr("en-EN")}>{_("ENGLISH")}</Dropdown.Item>
			</Dropdown>
		</Grid>
	)
}