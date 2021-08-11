import * as S from "./styles"

const Sidebar = () => {
	const items = ["Startup", "Controllers", "Exceptions", "Middlewares"]

	return (
		<S.Wrapper>
			<S.ListItem>
				{items.map((item) => (
					<S.Item key={item}>{item}</S.Item>
				))}
			</S.ListItem>
		</S.Wrapper>
	)
}

export default Sidebar
