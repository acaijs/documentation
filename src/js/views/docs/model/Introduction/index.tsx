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

			<p>{_("TEXT_02")}</p>

			<h5>{_("TITLE_01")}</h5>

			<p>{_("TEXT_03")}</p>

			<h5>{_("TITLE_02")}</h5>

			<p>{_("TEXT_04")}</p>

			<h5>{_("TITLE_03")}</h5>

			<p>{_("TEXT_05")}</p>

			<h3>{_("TITLE_04")}</h3>

			<p>{_("TEXT_06")}</p>

			<Highlight language="typescript">
{`
import User from "../../models/user.model";

// retrieval methods
const user = await User.find("id here"); // get by primary key
await User.first();
await User.last();
await User.paginate(/* current page, start at one */, /* items per page */);
await User.get(); // gets all the users, should be used with the query method call

// instance models
user.fill({field1:1, field2:"data"}); // add multiple fields into the model
user.field1 = 1; // or add them separately
await user.save();
await user.delete();

// query methods
await User.query().where("name", "John").limit(5).orderBy("name", "DESC").get();
`}
			</Highlight>

			<p>{_("TEXT_07")}</p>
		</>
	);
};

export default Models;