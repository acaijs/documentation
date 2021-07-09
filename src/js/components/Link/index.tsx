// Packages
import { Link as RouterLink } 	from "preact-router";
import Match 					from "preact-router/match";
import { useMemo } 				from "preact/hooks";

// Component
import Props 	from "./props";

const Link = (props: Props) => {
	// -------------------------------------------------
	// Memos
	// -------------------------------------------------

	const classes = useMemo(() => {
		const response = [];

		// optional css
		if (props.class) Array.isArray(props.class) ? props.class.forEach(i => response.push(i)):response.push(props.class);

		// respond
		return response.join(" ");
	}, [props]);

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Match path={props.href}>
			{({matches, url}: {matches: boolean, url: string}) => {
				const match = matches || (props.exact !== true && url.match(props.href));

				return (
					<RouterLink onClick={props.onClick} href={props.href} class={`${classes}${match ? ` ${props.active || "active"}`:""}`}>{props.children}</RouterLink>
				);
			}}
		</Match>
	);
};

export default Link;
