// Packages
import { useCallback, useEffect, useState } from "preact/hooks";

// Parts
import context 	from "./context";
import Props 	from "./props";

const Localization = ({ children, language }: Props) => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// state
	const [currentlang, setlanguage] = useState(language || navigator.language);

	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	useEffect(() => {
		setlanguage(language || navigator.language);
	}, [language]);

	// -------------------------------------------------
	// Callbacks
	// -------------------------------------------------

	const translate = useCallback(
		(category?: string) => {
			const name = (`${category}` || "index");
			return import(`../../../localization/${currentlang}/${name}.json`)
				.then(response => {
					return response.default;
				})
				.catch(error => {
					console.warn(error);
				});
		},
		[currentlang]
	);

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<context.Provider value={translate} children={children} />
	);
};

export default Localization;
