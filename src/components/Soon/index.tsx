import * as S from "./styles"

export type SoonProps = {
  name?: string;
}

const Soon = ({ name }: SoonProps) => {
	return (
		<S.Wrapper>
			<S.PageName>{name}</S.PageName>
      Coming soon
		</S.Wrapper>
	)
}

export default Soon
