// Component
import style 	from "./style.module.scss";
import Props 	from "./props";

const Card = (props: Props) => {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div class={"col-xl-3 col-lg-4 col-md-6 col-xs-6 p-5 p-xs-2 p-sm-2 pb-0"}>
			<div class={style.card}>
				{
					props.background !== false &&

					<i class={`fa fa-${props.icon || "code"} ${style.background}`} />
				}

				<i class={`fa fa-${props.icon || "code"}`} />

				<h4>{props.title}</h4>

				<p>{props.children}</p>
			</div>
		</div>
	);
};

export default Card;
