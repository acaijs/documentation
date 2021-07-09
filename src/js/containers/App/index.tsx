// Packages
import Router 		from "preact-router";
import AsyncRoute 	from "preact-async-route";

// Views
import Loading 	from "../../views/general/Loading";
import NotFound from "../../views/general/NotFound";

// Containers
import Navbar 	from "../Navbar";
import Sidebar 	from "../Sidebar";

// Modules
import useLocalization from "../../modules/Localization";

// Styling
import style from "../Navbar/style.module.scss";

const App = () => {
	// -------------------------------------------------
	// Callbacks
	// -------------------------------------------------

	const onPageChange = () => {
		setTimeout(() => {
			document.querySelector(`.${style.scrollbar} > div:first-child`)?.scrollTo({top: 0});
		}, 100);
	}

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<useLocalization.Provider language="en-EN">
			<Navbar>
				<Router onChange={onPageChange} static>
					<AsyncRoute
						path="/"
						loading={Loading}
						getComponent={() => import("../../views/general/Home").then(module => module.default)}
					/>

					<AsyncRoute
						path="/roadmap"
						loading={Loading}
						getComponent={() => import("../../views/general/Soon").then(module => module.default)}
					/>

					<AsyncRoute
						path="/blog"
						loading={Loading}
						getComponent={() => import("../../views/general/Soon").then(module => module.default)}
					/>

					<AsyncRoute
						path="/examples"
						loading={Loading}
						getComponent={() => import("../../views/general/Soon").then(module => module.default)}
					/>

					<Sidebar path="/docs/:version*">
						<Router>
							<AsyncRoute
								path="/docs/:version"
								loading={Loading}
								getComponent={() => import("../../views/docs/start/GettingStarted").then(module => module.default)}
							/>

							<AsyncRoute
								path="/docs/:version/app/exceptions"
								loading={Loading}
								getComponent={() => import("../../views/docs/application/Exceptions").then(module => module.default)}
							/>

							<AsyncRoute
								path="/docs/:version/app/controllers"
								loading={Loading}
								getComponent={() => import("../../views/docs/application/Controllers").then(module => module.default)}
							/>

							<AsyncRoute
								path="/docs/:version/app/middlewares"
								loading={Loading}
								getComponent={() => import("../../views/docs/application/Middlewares").then(module => module.default)}
							/>

							<AsyncRoute
								path="/docs/:version/app/models"
								loading={Loading}
								getComponent={() => import("../../views/docs/model/Introduction").then(module => module.default)}
							/>

							<AsyncRoute
								path="/docs/:version/app/models/relationships"
								loading={Loading}
								getComponent={() => import("../../views/docs/model/Relationships").then(module => module.default)}
							/>

							<AsyncRoute
								path="/docs/:version/app/models/types"
								loading={Loading}
								getComponent={() => import("../../views/docs/model/Types").then(module => module.default)}
							/>

							<AsyncRoute
								path="/docs/:version/app/presenters"
								loading={Loading}
								getComponent={() => import("../../views/docs/application/Presenters").then(module => module.default)}
							/>

							<AsyncRoute
								path="/docs/:version/app/providers"
								loading={Loading}
								getComponent={() => import("../../views/docs/application/Providers").then(module => module.default)}
							/>

							<AsyncRoute
								path="/docs/:version/app/validators"
								loading={Loading}
								getComponent={() => import("../../views/docs/application/Validators").then(module => module.default)}
							/>

							<AsyncRoute
								path="/docs/:version/app/views"
								loading={Loading}
								getComponent={() => import("../../views/docs/application/Views").then(module => module.default)}
							/>

							<AsyncRoute
								path="/docs/:version/modules/tester"
								loading={Loading}
								getComponent={() => import("../../views/docs/modules/Tester").then(module => module.default)}
							/>

							<AsyncRoute
								path="/docs/:version/modules/router"
								loading={Loading}
								getComponent={() => import("../../views/docs/modules/Router").then(module => module.default)}
							/>

							<AsyncRoute
								path="/docs/:version/modules/config"
								loading={Loading}
								getComponent={() => import("../../views/docs/modules/Config").then(module => module.default)}
							/>

							<AsyncRoute
								path="/docs/:version/modules/server"
								loading={Loading}
								getComponent={() => import("../../views/docs/modules/Server").then(module => module.default)}
							/>

							<AsyncRoute
								path="/docs/:version/modules/query"
								loading={Loading}
								getComponent={() => import("../../views/docs/modules/Query").then(module => module.default)}
							/>

							<NotFound default />
						</Router>
					</Sidebar>

					<NotFound default />
				</Router>	
			</Navbar>
		</useLocalization.Provider>
	);
};

export default App;
