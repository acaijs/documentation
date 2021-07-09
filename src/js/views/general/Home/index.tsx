// Packages
import { Link } 		from "preact-router";

// Modules
import useLocalization from "../../../modules/Localization";

// Component
import style 					from "./style.module.scss";

// Components
import Card 		from "../../../components/Card";
import Highlight 	from "../../../components/Highlight";

const Home = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("home");

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<div class={`container ${style.container}`}>
				<div class="row">
					<div class={`col-md-6 ${style.left}`}>
						<div class="d-flex flex-column justify-content-center p-4 mb-5" style={{height: "100%"}}>
							<h1 class="text-left text-xs-center mb-4">{_("TITLE")}</h1>

							<div class="col-md-10">{_("SHORT_DESCRIPTION")}</div>

							<div class="mt-2">
								<Link class="btn btn-primary me-3" href="/docs/x">Get started</Link>
								<Link class="btn btn-outline-primary">Star</Link>
							</div>
						</div>
					</div>
					<div class={`col-md-6 mt-5 ${style.right}`}>
						<Highlight class={style.code} language="typescript">
{`
// Packages
import Server		from "@acai/server";
import { route }	from "@acai/router";

// -------------------------------------------------
// Routing
// -------------------------------------------------

route.group("/apples", () => {
	route.get("/",	"apple.controller@index");
	route.post("/",	"apple.controller@store");
});

// -------------------------------------------------
// Server
// -------------------------------------------------

const server = new Server();
server.run();
`}
						</Highlight>
					</div>
				</div>
			</div>
			<div class="container mb-5">
				<div class="offset-md-2 col-md-10">
					<div class={`my-5 ${style.features}`}>
						<h4>{_("FEATURES")}</h4>
						<h2>{_("FEATURES_TITLE")}<span class="text-secondary">?</span></h2>

						<ol>
							<li>
								<h4>{_("FEATURE_01_TITLE")}</h4>
								<div>{_("FEATURE_01_DESCRIPTION")}</div>
							</li>
							<li>
								<h4>{_("FEATURE_02_TITLE")}</h4>
								<div>{_("FEATURE_02_DESCRIPTION")}</div>
							</li>
							<li>
								<h4>{_("FEATURE_03_TITLE")}</h4>
								<div>{_("FEATURE_03_DESCRIPTION")}</div>
							</li>
						</ol>
					</div>
				</div>
				
				<div class={style.special}>
					<div class="col-md-6">
						<h2 class="text-white">{_("HIGHLIGHT_01_TITLE")}</h2>

						<p>{_("HIGHLIGHT_01")}</p>
					</div>
					<div class="offset-md-4 col-md-8">
						<h2 class="text-primary">{_("HIGHLIGHT_02_TITLE")}</h2>

						<p>{_("HIGHLIGHT_02")}</p>
					</div>
				</div>

				<div class={style.content}>
					<h2 class="text-primary">{_("CONTENT")}<span class="text-secondary">?</span></h2>

					<div class="row">
						<Card title="Router" icon="route">
							{_("CONTENT_01")}
						</Card>
						<Card title="Server" icon="server">
							{_("CONTENT_02")}
						</Card>
						<Card title="Config">
							{_("CONTENT_03")}
						</Card>
						<Card title="Query" icon="database">
							{_("CONTENT_04")}
						</Card>
						<Card title="Model" icon="clone">
							{_("CONTENT_05")}
						</Card>
						<Card title="Tester" icon="vial">
							{_("CONTENT_06")}
						</Card>
						<Card title="Validators" icon="clipboard">
							{_("CONTENT_07")}
						</Card>
						<Card title="Utilities" icon="tools">
							{_("CONTENT_08")}
						</Card>
						<Card title="Stubber" icon="copy">
							{_("CONTENT_09")}
						</Card>
					</div>
				</div>

				<div class={style.partners}>
					<h2>{_("PARTNERS")}</h2>

					<div class="d-flex justify-content-between">
						<div class={style.img}>
							<img src="https://www.nuinalp.com/_nuxt/img/71fdbad.svg" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
