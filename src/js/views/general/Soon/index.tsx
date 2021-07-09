// Modules
import useLocalization from "../../../modules/Localization";

// Component
import style from "./style.module.scss";

const NotFound = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("navigation");
	
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div class={style.container}><div><span class={style.img}>{_("PAGE")}</span><span class={style.text}>{_("SOON")}</span></div></div>
	);
};

export default NotFound;
