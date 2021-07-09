// Packages
import { render } from "preact";

// Containers
import App from "./js/containers/App";

// -------------------------------------------------
// Debug
// -------------------------------------------------

import "preact/debug";

// -------------------------------------------------
// Styles
// -------------------------------------------------

import "@fortawesome/fontawesome-free/css/all.css";
import "./style/index.scss";

// -------------------------------------------------
// Render
// -------------------------------------------------

render(<App />, document.getElementById('app')!);
