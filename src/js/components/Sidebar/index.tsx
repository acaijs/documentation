// Packages
import { Dropdown, Grid, Title } from "yamiassu"
import { Link } from "react-router-dom"

// Component
import Props from "./props"

export default function Sidebar(props: Props): any {
	console.log(props.data)
	return (
		<Grid direction="column">
			{props.data.map(i => {
				// Router link
				if (i.type === "link") {
					return <Link key={i.link} to={i.link as string}>{i.label}</Link>
				}

				// Group links
				if (i.type === "title") {
					return <Title size={4}>{i.label}</Title>
				}

				// default dropdown
				return <Dropdown label={i.label}>{i.children}</Dropdown>
			})}
		</Grid>
	)
}