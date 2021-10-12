type LinkRoute = {
	label: string;
	link: string;
	type: "link";
	children?: never;
}

type LinkTitle = {
	label: string;
	link?: never;
	type: "title";
	children?: never;
}

type LinkDropdown = {
	label: string;
	link?: never;
	type: "dropdown";
	children: Link[];
}

type Link = LinkDropdown | LinkRoute | LinkTitle;

export default interface PropsInterface {
	data: Link[];
}