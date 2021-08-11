import Link from "next/link"

import Collapse from "components/Collapse"

import * as S from "./styles"
import items from "./items"

const Sidebar = () => {
	return (
		<S.Wrapper>
			<S.ListItem>
				{Object.keys(items).map((item) => (
					<S.Item key={item}>
						<Collapse title={item}>
							<S.ListItem>
								{Object.keys(items[item]).map((id) => (
									<S.Item key={id}>
										<Link href={id} passHref>
											<S.ItemLink>{items[item][id] as string}</S.ItemLink>
										</Link>
									</S.Item>
								))}
							</S.ListItem>
						</Collapse>
					</S.Item>
				))}
			</S.ListItem>
		</S.Wrapper>
	)
}

export default Sidebar
