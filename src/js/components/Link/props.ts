import { ComponentChildren } from "preact";

export default interface PropsInterface {
	class?: string | string[];
	exact?: boolean;
	active?: string;
	onClick?: () => void;

	href: string;
	children: ComponentChildren;
}