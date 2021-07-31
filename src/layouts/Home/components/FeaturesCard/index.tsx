import Heading from 'components/Heading'

import * as S from './styles'

export type FeaturesCardProps = {
  title?: string
  icon?: JSX.Element
  children?: React.ReactNode
}

const FeaturesCard = ({ title, icon, children }: FeaturesCardProps) => {
  return (
    <S.Wrapper>
      <S.Icon>{icon}</S.Icon>

      <Heading level={3} size="2xl">
        {title}
      </Heading>

      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}

export default FeaturesCard
