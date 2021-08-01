import styled, { css } from 'styled-components'

export const Wrapper = styled.aside`
  ${({ theme }) => css`
    position: static;
    border-right: 1px solid red;
  `}
`

export const ListItem = styled.ul`
  ${({ theme }) => css``}
`

export const Item = styled.li`
  ${({ theme }) => css``}
`
