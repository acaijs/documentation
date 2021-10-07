import { createElement, lazy } from "react"
import { Route } from "react-router-dom"

import { route } from "@acai/router"
import NotFound from "../views/general/NotFound"

const getRouteComponent = (auth?: boolean) => {
	if (auth === true) return Route
	if (auth === false) return Route

	return Route
}

export default function buildRoutes() {
	const routes = route
		.build(false)
		.map(route => {
			const _route = { ...route } as typeof route & { wrap: string | undefined }
			_route.wrap = route.options.wrap
				? `wrap/${route.options.wrap}`
				: undefined

			return _route
		})
		.map(route => {
			const RouteComponent: any = getRouteComponent(
				route.options?.auth as boolean,
			)
			const wrap = route.options?.wrap as undefined | (() => JSX.Element)
			const [category, view] = (route.file as string).split("/")

			// build component to render with wrap
			const callback = wrap
				? (p: any) =>
					createElement(
						wrap,
						undefined,
						createElement(
							lazy(() => import(`../views/${category}/${view}/index.tsx`).catch(() => NotFound)),
							p,
						),
					)
				: lazy(() => import(`../views/${category}/${view}/index.tsx`).catch(() => NotFound))

			return createElement(RouteComponent, {
				exact: true,
				key: route.file as string,
				path: route.path,
				component: callback,
				redirectTo: route.options?.redirect,
			})
		})

	return routes
}