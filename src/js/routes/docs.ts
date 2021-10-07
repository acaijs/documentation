import { route } from "@acai/router"

route.group("/docs", () => {
	route("/starting", "docs/Starting")
	route("/modules", "docs/Modules")

	route.group("/starting", () => {
		route("/", "docs/Starting")
	})

	route.group("/advanced", () => {
		route("/", "docs/Advanced")
		route("/server", "docs/Advanced")
		route("/query", "docs/Advanced")
	})
})