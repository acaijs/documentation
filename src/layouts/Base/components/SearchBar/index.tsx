import * as S from "./styles"

type SearchBarProps = {
  placeholder?: string;
}

const SearchBar = ({ ...props }: SearchBarProps) => {
	return <S.Wrapper {...props} />
}

export default SearchBar
