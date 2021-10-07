// Packages
import { useCallback, useContext, useEffect, useState } from "preact/hooks"

// Contexts
import context from "../../contexts/localization"

// Interfaces
import TranslateType from "./types"

export default function useLang(group?: string) {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// context
	const ctx = useContext(context)

	// states
	const [keys, setkeys] = useState({})

	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	useEffect(() => {
		ctx(group).then(setkeys)
	}, [ctx, group])

	// -------------------------------------------------
	// Callbacks
	// -------------------------------------------------

	const translate = useCallback((key: string, fallback?: string) => (keys || {})[key as keyof typeof keys] || fallback || "", [keys]) as any as TranslateType
	translate.setCurr = ctx.setCurr
	translate.getCurr = ctx.getCurr

	// -------------------------------------------------
	// Response
	// -------------------------------------------------

	return translate
}