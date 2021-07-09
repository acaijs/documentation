// Containers
import Highlight	from "../../../../components/Highlight";

// Modules
import useLocalization from "../../../../modules/Localization";

const Validators = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("docs.validators");
	
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<h1>{_("VALIDATORS")}</h1>

			<p>{_("TEXT_01")}</p>

			<Highlight language="typescript">
{`
// Packages
import Validator from "@acai/validator";

export default class RegisterValidator extends Validator {
	protected getSchema () {
		return {
			email	: [ "required", "email" ],
			password: [ "required", "confirmed", "text:25,5" ],
		};
	}
}
`}
			</Highlight>

			<p>{_("TEXT_02")}</p>

			<Highlight language="typescript">
{`
// Packages
import RegisterValidator from "../validators/register.validator";

const validationObject = new RegisterValidator({ /* fields */ });
const { validated, errors, fields } = validationObject;
`}
			</Highlight>

			<p>{_("TEXT_03")}</p>

			<Highlight language="typescript">
{`
// Packages
import Validator from "@acai/validator";

export default class RegisterValidator extends Validator {
	public throwable = false;

	/* ... */
}
`}
			</Highlight>

			<h3>{_("TITLE_01")}</h3>

			<h4>array</h4>
			
			<p>{_("RULE_01")}</p>

			<h4>confirmed</h4>
			
			<p>{_("RULE_02")}</p>

			<h4>email</h4>
			
			<p>{_("RULE_03")}</p>

			<h4>number</h4>
			
			<p>{_("RULE_04")}</p>

			<h4>object</h4>
			
			<p>{_("RULE_05")}</p>

			<h4>required</h4>

			<p>{_("RULE_06")}</p>

			<h4>string</h4>

			<p>{_("RULE_07")}</p>

			<h4>truthy</h4>

			<p>{_("RULE_08")}</p>

			<h3>{_("TITLE_02")}</h3>

			<p>{_("TEXT_04")}</p>

			<Highlight language="typescript">
{`
// Packages
import { addRule } from "@acai/validator";

addRule("password", {
	/** ${_("COMMENT_01")} */
	onValidate	? (value: unknown, key: string, fields: Record<string, unknown>, args?: string[]) => {
		return /* ${_("COMMENT_02")} */
	}
	/** ${_("COMMENT_03")} */
	onError		? (value: unknown, key: string, fields: Record<string, unknown>, args?: string[]) => {
		return \`\${key} is not a valid password\`;
	}
});

`}
			</Highlight>

			<p>{_("TEXT_05")}</p>
		</>
	);
};

export default Validators;
