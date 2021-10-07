// Packages
import { render } from "preact"

// Containers
import { App } from "./js/container/general/App"

// -------------------------------------------------
// Routes
// -------------------------------------------------

import "./js/routes/docs"

// -------------------------------------------------
// Render
// -------------------------------------------------

render(<App />, document.getElementById("app")!)
