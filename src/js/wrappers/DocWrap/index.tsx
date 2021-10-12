// Packages
import { useMemo } from "preact/hooks"
import { Grid, Title } from "yamiassu"

// Components
import Sidebar from "../../components/Sidebar"

// Component
import Props from "./props"

// Hooks
import useLang from "../../hooks/useLang"

// Menus
import advancedMenu from "./menus/advanced"
import sidestartingMenus from "./menus/starting"

export default function DocWrap(props: Props) {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLang("navbar")

	// -------------------------------------------------
	// Memos
	// -------------------------------------------------

	const menudata = useMemo(() => {
		return ({
			advanced: advancedMenu,
			starting: sidestartingMenus,
		})[props.sidebar].map(i => ({ ...i, label: _(i.key) }))
	}, [props.sidebar, _])

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Grid container direction="row">
			<Grid col={2}>
				<Sidebar data={menudata as any} />
			</Grid>
			<Grid col={10}>
				{props.title && <Title>{props.title}</Title>}
				{props.children}
			</Grid>
		</Grid>
	)
}