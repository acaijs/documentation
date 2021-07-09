// Component
import NavbarPropsInterface from "./props";
import style 				from "./style.module.scss";

// Modules
import useLocalization from "../../modules/Localization";

// Components
import Collapse from "../../components/Collapse";
import Link 	from "../../components/Link";

const Sidebar = (props: NavbarPropsInterface) => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("navigation");

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div style={{marginBottom: "15vh"}}>
			<div class={style.navbar}>
				<div class="container">
					<div class="row" style={{width:"100%"}}>
						<div class={`${style.links} nav col-lg-3 col-12 p-4 mt-lg-2 pt-lg-2 pt-5 mt-5 ps-0`}>
							<Link active={style.active} href="/docs/x" exact>{_("START")}</Link>
							<Link active={style.active} href="/docs/x/app/controllers">{_("CONTROLLERS")}</Link>
							<Link active={style.active} href="/docs/x/app/exceptions">{_("EXCEPTIONS")}</Link>
							<Link active={style.active} href="/docs/x/app/middlewares">{_("MIDDLEWARES")}</Link>
							<Collapse title={_("MODELS")}>
								<Link active={style.active} exact href="/docs/x/app/models">{_("INTRODUCTION")}</Link>
								<Link active={style.active} href="/docs/x/app/models/types">{_("TYPES")}</Link>
								<Link active={style.active} href="/docs/x/app/models/relationships">{_("RELATIONSHIPS")}</Link>
							</Collapse>
							<Link active={style.active} href="/docs/x/app/presenters">{_("PRESENTERS")}</Link>
							<Link active={style.active} href="/docs/x/app/providers">{_("PROVIDERS")}</Link>
							<Link active={style.active} href="/docs/x/app/validators">{_("VALIDATORS")}</Link>
							<Link active={style.active} href="/docs/x/app/views">{_("VIEWS")}</Link>
							<Collapse title={_("MODULES")}>
								<Link active={style.active} href="/docs/x/modules/tester">{_("TESTER")}</Link>
								<Link active={style.active} href="/docs/x/modules/router">{_("ROUTER")}</Link>
								<Link active={style.active} href="/docs/x/modules/config">{_("CONFIG")}</Link>
								<Link active={style.active} href="/docs/x/modules/server">{_("SERVER")}</Link>
								<Link active={style.active} href="/docs/x/modules/query">{_("QUERY")}</Link>
							</Collapse>
						</div>

						<div class="comein col-lg-9">
							{props.children}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
