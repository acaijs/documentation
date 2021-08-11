import { HTMLAttributes } from "react"

import * as S from "./styles"

export type MarkDownContentProps = {
  children?: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>

const MarkDownContent = ({ children, ...props }: MarkDownContentProps) => {
	return <S.Wrapper {...props}>{children}</S.Wrapper>
}
export default MarkDownContent
