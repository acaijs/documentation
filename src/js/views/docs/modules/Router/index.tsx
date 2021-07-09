// Containers
import Highlight	from "../../../../components/Highlight";

// Modules
import useLocalization from "../../../../modules/Localization";

const Router = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("docs.router");
	
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<h1>{_("ROUTER")}</h1>

			<h3>{_("TITLE_01")}</h3>

			<Highlight language="typescript">
{`
import { route, router } from "@acai/router";

route.post("/register", "controllers/auth@register");
route.post("/login", 	"controllers/auth@login");

route.group("/user", () => {
	route.get("/", 		"controllers/user@show");
	route.patch("/", 	"controllers/user@update");
});

// ${_("COMMENT_03")}
const selectedRouteInfo = router("url/path/here", "GET", route.build());
`}
			</Highlight>

			<h3>{_("TITLE_02")}</h3>

			<p>{_("TEXT_01")}</p>

			<Highlight language="typescript">
{`
import { route } from "@acai/router";
route.group("/users", () => {
	route.get("/", 	"controllers/user@index");
	
	route.group("/auth", () => {
		route.get("/", 		"controllers/user@show");
		route.patch("/", 	"controllers/user@update");
	});
});
`}
			</Highlight>

			<h3>{_("TITLE_03")}</h3>

			<p>{_("TEXT_02")}</p>

			<Highlight language="typescript">
{`
import { route } from "@acai/router";

route("/", 			"get/route"); // ${_("COMMENT_02")}
route.get("/", 		"get/route");
route.post("/", 	"post/route");
route.put("/", 		"put/route");
route.patch("/", 	"patch/route");
route.delete("/", 	"delete/route");
route.any("/", 		"any/route"); // ${_("COMMENT_03")}
`}
			</Highlight>

			<h3>{_("TITLE_04")}</h3>

			<p>{_("TEXT_03")}</p>

			<Highlight language="typescript">
{`
import { route } from "@acai/router";

route.options({middleware: ["auth", "admin"]}, () => {
	// ${_("COMMENT_04")}

	// ${_("COMMENT_05")}
	route.options({"!middleware": ["auth"]}, () => {
		// ${_("COMMENT_06")}
	});
});
`}
			</Highlight>
		</>
	);
};

export default Router;
