// Containers
import Highlight	from "../../../../components/Highlight";

// Modules
import useLocalization from "../../../../modules/Localization";

const Config = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("docs.config");
	
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<h1>{_("CONFIG")}</h1>

			<p>{_("TEXT_01")}</p>

			<h3>{_("TITLE_01")}</h3>

			<Highlight language="typescript">
{`
import config from "@acai/config";

// ${_("COMMENT_01")}
console.log(config.env);
// ${_("COMMENT_02")}
console.log(config.getEnv("key"));

// ${_("COMMENT_03")}
console.log(config.config);
// ${_("COMMENT_04")}
console.log(config.getConfig("key"));

// ${_("COMMENT_05")}
config.setConfig("key", "value");
`}
			</Highlight>

			<p>{_("TEXT_02")}</p>

			<h3>{_("TITLE_02")}</h3>

			<p>{_("TEXT_03")}</p>

			<Highlight language="typescript">
{`
import config from "@acai/config";

// ${_("COMMENT_06")}
config.fetchEnv("testing");
// ${_("COMMENT_07")}
config.fetchEnv("production");
`}
			</Highlight>
		</>
	);
};

export default Config;
