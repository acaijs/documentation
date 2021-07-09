// Packages
import { ComponentChildren } from "preact";

export default interface NavbarPropsInterface {
	title?: string;
	children?: ComponentChildren;

	path?: string;
}