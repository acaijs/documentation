import theme from "styles/theme"

import * as S from "./styles"

export type HeadingProps = {
  children?: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: keyof typeof theme.fontWeights;
  size?: keyof typeof theme.fontSizes;
  color?: keyof typeof theme.colors;
}

const Heading = ({
	level = 2,
	weight = "bold",
	size = "3xl",
	color,
	children,
	...props
}: HeadingProps) => {
	return (
		<S.Wrapper
			as={`h${level}`}
			weight={weight}
			size={size}
			color={color}
			{...props}
		>
			{children}
		</S.Wrapper>
	)
}

export default Heading
