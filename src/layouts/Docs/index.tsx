import Container from 'components/Container'
import Sidebar from './components/Sidebar'

import * as S from './styles'

type DocsLayoutProps = {
  children?: React.ReactNode
}

const DocsLayout = ({ children }: DocsLayoutProps) => {
  return (
    <Container>
      <S.Wrapper>
        <Sidebar />

        <S.Content>{children}</S.Content>
      </S.Wrapper>
    </Container>
  )
}

export default DocsLayout
