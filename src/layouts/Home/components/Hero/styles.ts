import styled, { css } from "styled-components"

export const Wrapper = styled.section`
  ${({ theme }) => css`
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
    padding: ${theme.spaces["5xl"]} 0;

    h3 {
      margin-top: ${theme.spaces.md};
    }
  `}
`

export const Buttons = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spaces.md} 0;

    > :not(:last-child) {
      margin-right: ${theme.spaces.xs};
    }
  `}
`
