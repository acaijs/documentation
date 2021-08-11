import styled, { css } from "styled-components"

export const Wrapper = styled.main`
  ${({ theme }) => css`
    padding-top: ${theme.spaces.sm};
    min-height: 100vh;
  `}
`
