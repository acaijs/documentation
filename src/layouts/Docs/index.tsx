import Container from "components/Container"
import MarkDownContent from "components/MarkDownContent"
import Sidebar from "./components/Sidebar"

import * as S from "./styles"

type DocsLayoutProps = {
  doc?: any;
}

const DocsLayout = ({ doc }: DocsLayoutProps) => {
	return (
		<Container>
			<S.Wrapper>
				<Sidebar />

				<S.Content>
					<MarkDownContent dangerouslySetInnerHTML={{ __html: doc.content }} />
				</S.Content>
			</S.Wrapper>
		</Container>
	)
}

export default DocsLayout
