// Packages
import { useState } 	from "preact/hooks";
import { Scrollbars } 	from "preact-custom-scrollbars";

// Component
import NavbarPropsInterface from "./props";
import style 				from "./style.module.scss";

// Modules
import useLocalization from "../../modules/Localization";

// Image
import logo from "../../../img/logo.svg";

// Components
import Link	from "../../components/Link";

const Navbar = (props: NavbarPropsInterface) => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// states
	const [ navopen, setnavopen ] = useState(false);
	const [ dettach, setdettach ] = useState(false);

	// hooks
	const _ = useLocalization("navigation");

	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	const onScroll = (el: {target: { scrollTop: number }}) => {
		setdettach(el.target.scrollTop > 100);
	}

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div>
			<Scrollbars onScroll={onScroll} class={`${style.scrollbar}`}>
				<nav class={`navbar navbar-light p-0 py-2 ${style.navbar}${navopen ? ` ${style.open}`:""}${dettach ? ` ${style.dettach}`:""}`}>
					<div class="container">
						<Link class={`navbar-brand text-bold ${style.logo}`} href="/">
							<img src={logo} width="45" height="45" class="d-inline-block align-top me-2" alt="Açaí framework logo" />
							<span class="text-primary">Açaí</span><span class="text-secondary">JS</span>
						</Link>

						<div class={style.links}>
							<Link onClick={() => setnavopen(false)} active={style.active} href="/docs/x">{_("DOC")}</Link>
							<Link onClick={() => setnavopen(false)} active={style.active} href="/examples">{_("EXAMPLES")}</Link>
							<Link onClick={() => setnavopen(false)} active={style.active} href="/roadmap">{_("ROADMAP")}</Link>
							<Link onClick={() => setnavopen(false)} active={style.active} href="/blog">{_("BLOG")}</Link>
						</div>

						<div class={style.icons}>
							<span>v1.x</span>
							<a target="_blank" href="https://github.com/orgs/AcaiFramework/dashboard"><i class="fab fa-github" /></a>
							<a href="/discord"><i class="fab fa-discord" /></a>
						</div>

						<button class={style.backdrop} onClick={() => setnavopen(false)} />
						
						<button class={style.ham} onClick={() => setnavopen(!navopen)}>
							<i class="fa fa-bars" />
						</button>
					</div>
				</nav>
				
				<div class="comein" style={{minHeight:"100vh"}}>
					{props.children}
				</div>

				<div class={style.footer}>
					<div class="container">
						<h1>
							<span class="text-primary">Açaí</span><span class="text-secondary">JS</span>
						</h1>
						<div class="p-4 row">
							<div class="col-md-3 p-0">
								<h3>{_("HIGHLIGHTS")}</h3>

								<ul>
									<li><Link href="/docs/x/app/controllers">{_("CHANGELOG")}</Link></li>
									<li><Link href="/docs/x">{_("START")}</Link></li>
									<li><Link href="/docs/x/modules/router">{_("ROUTER")}</Link></li>
									<li><Link href="/docs/x/app/controllers">{_("CONTROLLER")}</Link></li>
									<li><Link href="/docs/x/app/controllers">{_("AUTHENTICATION")}</Link></li>
									<li><Link href="/docs/x/app/controllers">{_("CLI")}</Link></li>
									<li><Link href="/docs/x/modules/query">{_("DATABASE")}</Link></li>
									<li><Link href="/docs/x/modules/tester">{_("TESTING")}</Link></li>
								</ul>
							</div>
							<div class="col-md-3 p-0">
								<h3>{_("RESOURCES")}</h3>
							</div>
							<div class="col-md-6 p-0">
								<p>{_("DESCRIPTION")}</p>

								<p>{_("CREATED_BY")}</p>

								<div class={style.socials}>
									<a><i class="fab fa-facebook-f" /></a>
									<a><i class="fab fa-instagram" /></a>
									<a><i class="fab fa-twitter" /></a>
									<a target="_blank" href="https://github.com/orgs/AcaiFramework/dashboard"><i class="fab fa-github" /></a>
									<a><i class="fab fa-discord" /></a>
								</div>
							</div>
						</div>
						
						<img src={logo} width="45" height="45" alt="Açaí framework logo" />
					</div>
				</div>
			</Scrollbars>
		</div>
	);
};

export default Navbar;
