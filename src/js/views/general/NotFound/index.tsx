// Modules
import useLocalization from "../../../modules/Localization";

// Component
import Props from "./props";
import style from "./style.module.scss";

const NotFound = (props: Props) => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("navigation");
	
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div class={style.container}><div><span class={style.img}>404</span><span class={style.text}>{_("PAGE_NOT_FOUND")}</span></div></div>
	);
};

export default NotFound;
