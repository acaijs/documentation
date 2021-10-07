type LinkRoute = {
	label: string;
	link: string;
	children?: never;
}

type LinkDropdown = {
	label: string;
	link?: never;
	children?: Link;
}

type Link = LinkDropdown | LinkRoute;

export default interface PropsInterface {
	data: Link[];
}