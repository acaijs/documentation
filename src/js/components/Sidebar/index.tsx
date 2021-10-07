// Packages
import { Dropdown, Grid } from "yamiassu"
import { Link } from "react-router-dom"

// Component
import Props from "./props"

export default function Sidebar(props: Props): any {
	return (
		<Grid direction="column">
			{props.data.map(i => {
				if (!i.children)
					return <Link key={i.link} to={i.link as string}>{i.label}</Link>

				return <Dropdown label={i.label}>{i.children}</Dropdown>
			})}
		</Grid>
	)
}