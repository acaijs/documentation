// Containers
import Highlight	from "../../../../components/Highlight";

// Modules
import useLocalization from "../../../../modules/Localization";

const Server = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("docs.server");
	
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<h1>{_("SERVER")}</h1>

			<div class="alert alert-primary">{_("COMMENT_01")}</div>

			<p>{_("TEXT_01")}</p>

			<h3>{_("TITLE_01")}</h3>

			<Highlight language="typescript">
{`
import server from "@acai/server";

// ${_("COMMENT_02")}
const route = server.getRoute();

route.options({middleware: ["test"]}, () => {
	route.get("/", "file/test@index");
});

const instance = new server();

// ${_("COMMENT_03")}
instance.addMiddleware("test", (data, next) => next(data));

instance.run();
`}
			</Highlight>

			<h3>{_("TITLE_02")}</h3>

			<p>{_("TEXT_02")}</p>

			<Highlight language="typescript">
{`
const instance = new server();

instance.setOnRequest((url: string, method: string) => {
	return {
		route		: match.path,
		// ${_("COMMENT_04")}
		controller	: ".",
		// ${_("COMMENT_05")}
		method		: "index",
		// ${_("COMMENT_06")}
		options 	: match.options,
		// ${_("COMMENT_07")}
		params		: match.variables,
		// ${_("COMMENT_08")}
		query		: query,
		// ${_("COMMENT_09")}
		fields		: content.fields,
		// ${_("COMMENT_10")}
		files		: content.files,
	};
});
`}
			</Highlight>

			<p>{_("TEXT_03")}</p>

			<h3>{_("TITLE_03")}</h3>

			<p>{_("TEXT_04")}</p>

			<Highlight language="typescript">
{`
const instance = new server();

class Provider {
	public boot () {
		/* ${_("COMMENT_11")} */
	}
}

instance.addProvider(Provider);

instance.run();
`}
			</Highlight>

			<h3>{_("TITLE_04")}</h3>

			<p>{_("TEXT_05")}</p>

			<Highlight language="typescript">
{`
const instance = new server();

// ${_("COMMENT_12")}
instance.addMiddleware("test", (data, next) => next(data));

// ${_("COMMENT_13")}
instance.addMiddlewares({
	test: (data, next) => next(data),
	auth: (data, next) => "404",
});

// ${_("COMMENT_14")}
instance.addGlobal([
	(data, next) => next(data),
]);

instance.run();
`}
			</Highlight>

			<ul>
				<li>{_("LIST_01")}</li>
				<li>{_("LIST_02")}</li>
			</ul>

			<h3>{_("TITLE_05")}</h3>

			<p>{_("TEXT_06")}</p>

			<Highlight language="typescript">
{`
import { response } from "@acai/server";

// ${_("COMMENT_15")}
response().view("./views/index.html");
// ${_("COMMENT_16")}
response().status(201).data({});
`}
			</Highlight>
		</>
	);
};

export default Server;
