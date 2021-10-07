// Packages
import { useCallback, useState } from "preact/hooks"

// Contexts
import { LocalizationContextInterface, Provider } from "../../contexts/localization"

// Component
import PropsInterface from "./props"

export default function Localization(props: PropsInterface) {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	const [curr, setcurr] = useState(props.language || navigator.language)

	// -------------------------------------------------
	// Callbacks
	// -------------------------------------------------

	const localize = useCallback(
		(category?: string) => {
			console.log(`../../../localization/${curr}/${(`${category}` || "index").replaceAll(".", "/")}.json`)
			return import(/* @vite-ignore */ `../../../localization/${curr}/${(`${category}` || "index")}.json`)
				.then(response => {
					return response.default
				})
				.catch(error => {
					console.warn(error)
				})
		},
		[curr],
	) as LocalizationContextInterface

	localize.setCurr = setcurr
	localize.getCurr = useCallback(() => curr, [curr])

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Provider value={localize}>
			{props.children}
		</Provider>
	)
}