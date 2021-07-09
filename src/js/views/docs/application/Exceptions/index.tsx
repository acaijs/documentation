// Containers
import Highlight	from "../../../../components/Highlight";

// Modules
import useLocalization from "../../../../modules/Localization";

const Exceptions = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("docs.exceptions");
	
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<h1>{_("EXCEPTIONS")}</h1>
			<div class="alert alert-primary">{_("TEXT_01")}</div>

			<p>{_("TEXT_02")}</p>

			<Highlight language="typescript">
{`
import { response }			from "@acai/server";
import { CustomException } 	from "@acai/utils";

export default class ModelException extends CustomException {
	// ${_("COMMENT_01")}
	public readonly shouldReport = false;

	public constructor (model, id) {
		super("modelNotFound", \`Model \${this.model.name} of primary key \${this.primaryKey} not found\`);

		this.model		= model;
		this.primaryKey	= id;
	}

	public async report (request: AppRequest) {
		/* ${_("COMMENT_02")} */
	}

	public render (request: AppRequest) {
		if (request.headers.Accept === "application/json") {
			return response({
				data: {message: this.message},
				status: 404,
			})
		}

		return response({
			data: \`<h1>\${this.message}</h1>\`,
		});
	}
}
`}
			</Highlight>

			<p>{_("TEXT_03")}</p>

			<div class="alert alert-secondary">{_("TEXT_04")}</div>

			<p>{_("TEXT_05")}</p>
		</>
	);
};

export default Exceptions;
