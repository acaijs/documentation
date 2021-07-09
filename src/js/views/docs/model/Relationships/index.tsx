// Containers
import Highlight	from "../../../../components/Highlight";

// Modules
import useLocalization from "../../../../modules/Localization";

const Models = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("docs.models");
	
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<h1>{_("MODELS")}</h1>
			<p>{_("TEXT_01")}</p>

			<Highlight language="typescript">
{`
// Packages
import { Model, Field, Table } from "@acai/model";

@Table("data_user")
export default class User extends Model {
	@Field()
	public id: string;

	@Field()
	public username: string;

	@Field()
	public avatar: string;

	@Field()
	public name: string;

	@Field()
	public email: string;
}
`}
			</Highlight>
		</>
	);
};

export default Models;