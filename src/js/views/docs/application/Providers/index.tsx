// Containers
import Highlight	from "../../../../components/Highlight";

// Modules
import useLocalization from "../../../../modules/Localization";

const Providers = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("docs.providers");
	
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<h1>{_("PROVIDERS")}</h1>

			<p>{_("TEXT_01")}</p>

			<Highlight language="typescript">
{`
// Packages
import config			from "@acai/config";
import { setDefault }	from "@acai/query";

export default class DatabaseProvider {
	public async boot () {
		const info = config.config.database as any;

		await setDefault(
			"sql",
			{
				user		: info.connection.username,
				password	: info.connection.password,
				port		: parseInt(info.connection.port as unknown as string),
				host		: info.connection.host,
				database	: info.connection.database,
			}
		);
	}
}

`}
			</Highlight>

			<p>{_("TEXT_02")}</p>

			<Highlight language="typescript">
{`
// Packages
import { ProviderData, response }	from "@acai/server";

export default class DatabaseProvider {
	public onError ({ error }: ProviderData) {
		if (error.type === "validation") {
			return response().status(403).data(error.data);
		}
	}
}
`}
			</Highlight>

			<p>{_("TEXT_03")}</p>
		</>
	);
};

export default Providers;
