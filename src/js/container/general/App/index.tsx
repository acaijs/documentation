// Packages
import { Theme } from "yamiassu"
import { useMemo } from "preact/hooks"
import { Suspense } from "preact/compat"
import { BrowserRouter, Switch, Route } from "react-router-dom"

// Components
import Navbar from "../../../components/Navbar"
import Localization from "../../../components/Localization"

// Utils
import buildRoutes from "../../../utils/buildRoutes"

// Views
import NotFound from "../../../views/general/NotFound"

export function App() {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Theme>
			<Localization>
				<BrowserRouter>
					<Navbar />
					<Suspense fallback="">
						<Switch>
							{useMemo(() => buildRoutes(), [])}
							<Route component={NotFound} />
						</Switch>
					</Suspense>
				</BrowserRouter>
			</Localization>
		</Theme>
	)
}
