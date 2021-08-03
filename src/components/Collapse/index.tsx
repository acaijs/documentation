import { useState } from 'react'

import * as S from './styles'

export type CollapseProps = {
  title?: string
  children?: React.ReactNode
}

const Collapse = ({ title, children }: CollapseProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <S.Wrapper
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded((val) => !val)}
      >
        {title}
      </S.Wrapper>

      <S.Content isActive={isExpanded}>{children}</S.Content>
    </>
  )
}
export default Collapse
