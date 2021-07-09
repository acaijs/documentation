// Containers
import Sidebar from "../../../../containers/Sidebar";

// Modules
import useLocalization from "../../../../modules/Localization";

// Components
import Highlight from "../../../../components/Highlight";

const Home = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("docs.start");

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<h1>{_("GETTING_STARTED")}</h1>
			<p>{_("INTRODUCTION_01")}</p>

			<Highlight language="bash">git clone https://github.com/AcaiFramework/application.git</Highlight>

			<p>{_("INTRODUCTION_02")}</p>

			<h3>{_("DIRECTORY")}</h3>

			<div class="card mb-4">
				<ul>
					<li>
						app
						<ul>
							<li>
								controllers
								<ul>
									<li>http</li>
								</ul>
							</li>
							<li>exceptions</li>
							<li>middlewares</li>
							<li>models</li>
							<li>presenters</li>
							<li>providers</li>
							<li>validators</li>
							<li>views</li>
						</ul>
					</li>
					<li>config</li>
					<li>interfaces</li>
					<li>routes</li>
				</ul>
			</div>

			<p>{_("INTRODUCTION_03")}</p>

			<p>{_("INTRODUCTION_04")}</p>

			<div class="alert alert-primary">{_("INTRODUCTION_05")}</div>
		</>
	);
};

export default Home;
