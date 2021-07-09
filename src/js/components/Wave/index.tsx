// Component
import Props from "./props";
import style from "./style.module.scss";

const Wave = (props: Props) => {	
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div class={style.container}>
			<svg class={style.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
				<defs>
					<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
				</defs>
				<g class={style.parallax}>
					<use xlinkHref="#gentle-wave" x="48" y="0" fill={`${props.color || "var(--bs-primary)"}`} opacity="0.5" />
					<use xlinkHref="#gentle-wave" x="48" y="3" fill={`${props.color || "var(--bs-primary)"}`} opacity="0.5" />
					<use xlinkHref="#gentle-wave" x="48" y="5" fill={`${props.color || "var(--bs-primary)"}`} opacity="0.5" />
					<use xlinkHref="#gentle-wave" x="48" y="7" fill={`${props.color || "var(--bs-primary)"}`} />
				</g>
			</svg>
		</div>
	);
};

export default Wave;
