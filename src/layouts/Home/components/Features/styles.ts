import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    text-align: center;
  `}
`

export const List = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, minmax(0px, 1fr));
    margin-top: ${theme.spaces.md};
  `}
`
