import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1 1 auto;
  `}
`
