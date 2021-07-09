// Containers
import Highlight	from "../../../../components/Highlight";

// Modules
import useLocalization from "../../../../modules/Localization";

const Middlewares = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("docs.middlewares");
	
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<h1>{_("MIDDLEWARES")}</h1>
			<p>{_("TEXT_01")}</p>

			<Highlight language="typescript">
{`
export default function AdminMiddleware (request: AppRequest, next) {
	if (!request.user || request.user.type !== "admin") {
		return "You are not allowed to see this page";
	}

	return next(request);
}
`}
			</Highlight>

			<p>{_("TEXT_02")}</p>

			<h4>{_("TITLE_01")}</h4>

			<p>{_("TEXT_03")}</p>

			<Highlight language="typescript">
{`
// Packages
import config from "@acai/config";

// Middlewares
import ParseBodyMiddleware from "../app/middlewares/parseBody.middleware";

// -------------------------------------------------
// Global middlewares
// -------------------------------------------------

config.setConfig("global", [
	ParseBodyMiddleware
]);
`}
			</Highlight>

			<h4>{_("TITLE_02")}</h4>

			<p>{_("TEXT_04")}</p>

			<h4>{_("TITLE_03")}</h4>

			<p>{_("TEXT_05")}</p>

			<Highlight language="typescript">
{`
export default async function GenericMiddleware (request: AppRequest, next) {
	// ${_("COMMENT_01")}
	
	const response = await next(request);

	// ${_("COMMENT_02")}
	
	return response;
}
`}
			</Highlight>
		</>
	);
};

export default Middlewares;
