// Containers
import Highlight	from "../../../../components/Highlight";

// Modules
import useLocalization from "../../../../modules/Localization";

const Presenters = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("docs.presenters");
	
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<h1>{_("PRESENTERS")}</h1>
			<div class="alert alert-primary">{_("TEXT_01")}</div>

			<p>{_("TEXT_02")}</p>

			<Highlight language="typescript">
{`
// Packages
import { Presenter } from "@acai/utils";

// Models
import User from "../models/user";

export default class UserPresenter extends Presenter {
	public async format (model: User) {
		return {
			id: 			model.id,
			name: 			model.name,
			username: 		model.username,
			avatar: 		model.avatar,
			email:			model.email,
		};
	}

	// ${_("COMMENT_01")}
	public async formatList (model: User) {
		return {
			id: 			model.id,
			username: 		model.username,
			avatar: 		model.avatar,
		};
	}
}

// ${_("COMMENT_02")}
console.log(UserPresenter.present(/* data here */));

// ${_("COMMENT_03")}
console.log(UserPresenter.present({name: "John", age: 36}));

// ${_("COMMENT_04")}
console.log(UserPresenter.present([{name: "John", age: 36}, {name: "Barbara", age: 24}]));
`}
			</Highlight>

			<h4>{_("TITLE_01")}</h4>

			<p>{_("TEXT_03")}</p>

			<h4>{_("TITLE_02")}</h4>

			<p>{_("TEXT_04")}</p>

			<Highlight language="typescript">
{`
// Packages
import { Presenter } from "@acai/utils";

// Models
import User from "../models/user";

export default class UserPresenter extends Presenter {
	public async customFormat (model: User) {
		return {
			id: 			model.id,
			name: 			model.name,
			username: 		model.username,
			avatar: 		model.avatar,
			email:			model.email,
		};
	}
}

// ${_("COMMENT_02")}
console.log(UserPresenter.present(/* data here */, {}, "customFormat"));
`}
			</Highlight>
		</>
	);
};

export default Presenters;
