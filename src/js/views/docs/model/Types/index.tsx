// Containers
import Highlight	from "../../../../components/Highlight";

// Modules
import useLocalization from "../../../../modules/Localization";

const Models = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("docs.types");
	
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<h1>{_("TYPES")}</h1>

			<p>{_("TEXT_01")}</p>

			<h3>{_("TITLE_05")}</h3>

			<h5>boolean</h5>

			<p>{_("TYPE_01")}</p>

			<h5>date</h5>

			<p>{_("TYPE_02")}</p>

			<h5>float</h5>

			<p>{_("TYPE_03")}</p>

			<h5>int</h5>

			<p>{_("TYPE_04")}</p>

			<h5>string</h5>

			<p>{_("TYPE_05")}</p>

			<h5>bigInt</h5>

			<p>{_("TYPE_06")}</p>

			<h5>dateTime</h5>

			<p>{_("TYPE_07")}</p>

			<h5>time</h5>

			<p>{_("TYPE_08")}</p>

			<h5>timestamp</h5>

			<p>{_("TYPE_09")}</p>

			<h5>id</h5>

			<p>{_("TYPE_10")}</p>

			<h5>sid</h5>

			<p>{_("TYPE_11")}</p>

			<h5>uuid</h5>

			<p>{_("TYPE_12")}</p>

			<h5>text</h5>

			<p>{_("TYPE_13")}</p>

			<h5>json</h5>

			<p>{_("TYPE_14")}</p>

			<h5>hash</h5>

			<p>{_("TYPE_15")}</p>

			<h3>{_("TITLE_02")}</h3>

			<p>{_("TEXT_02")}</p>

			<ul>
				<li><code>?</code> {_("WILDCARD_01")}</li>
				<li><code>!</code> {_("WILDCARD_02")}</li>
				<li><code>*</code> {_("WILDCARD_03")}</li>
				<li><code>=</code> {_("WILDCARD_04")}</li>
			</ul>

			<h3>{_("TITLE_03")}</h3>

			<p>{_("TEXT_03")}</p>

			<Highlight language="typescript">
{`
import { typeManager } from "@acai/model";

typeManager.add("customTypeName", {
	// database type
	type: {
		type: "string",
		length: 15,
	},

	// ${_("COMMENT_01")}
	onCreate: (value: unknown, row: Record<string, unknown>, params?: string[]) => {
		return /* sanitized value */;
	},
	// ${_("COMMENT_02")}
	onSave: (value: unknown, row: Record<string, unknown>, params?: string[]) => {
		return /* sanitized value */;
	},
	// ${_("COMMENT_03")}
	onRetrieve: (value: unknown, row: Record<string, unknown>, params?: string[]) => {
		return /* sanitized value */;
	},
	// ${_("COMMENT_04")}
	onSerialize: (value: unknown, row: Record<string, unknown>, params?: string[]) => {
		return /* sanitized value */;
	},
});
`}
			</Highlight>
		</>
	);
};

export default Models;
