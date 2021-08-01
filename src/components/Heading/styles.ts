import styled, { css } from 'styled-components'

import { HeadingProps } from '.'

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, weight, size, color }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.fontSizes[size!]};
    font-weight: ${theme.fontWeights[weight!]};
  `}
`
