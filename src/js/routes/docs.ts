import { route } from "@acai/router"

route.group("/docs", () => {
	route("/starting", "docs/Starting")
	route("/modules", "docs/Modules")

	route.group("/starting", () => {
		route("/", "starting/Home")

		route.group("/b", () => {
			route("/download", "starting/Downloading")
		})
	})

	route.group("/advanced", () => {
		route("/", "advanced/Home")
		route("/server", "advanced/Home")
		route("/query", "advanced/Home")
	})
})