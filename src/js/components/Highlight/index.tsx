// Packages
import highlighter 	from "highlight.js";
import "highlight.js/styles/github.css";

// Component
import style from "./style.module.scss";
import Props from "./props";
import { useMemo } from "preact/hooks";

const Highlight = (props: Props) => {
	// -------------------------------------------------
	// Memos
	// -------------------------------------------------

	const classes = useMemo(() => {
		const response: string[] = [];

		// optional classes
		if (props.class) Array.isArray(props.class) ? props.class.forEach(i => response.push(i)):response.push(props.class);

		// required classes
		response.push(style.background);

		return response.join(" ");
	}, [props.class]);

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<pre class={classes}>
			<code
				class={`language-${props.language}`}
				dangerouslySetInnerHTML={{ __html: highlighter.highlight(props.language, props.children).value }}
			/>
		</pre>
	);
};

export default Highlight;
