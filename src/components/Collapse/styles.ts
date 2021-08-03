import { lighten } from 'polished'
import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    text-align: center;
    cursor: pointer;
    user-select: none;
    font-size: 1rem;
    border-radius: ${theme.radii.md};
    padding: 0.25rem 0.5rem;
    font-weight: 600;
    background: transparent;
    border: 0;
    transition: 0.2s;

    &:hover {
      background: ${lighten('0.5', theme.colors.primary)};
    }
  `}
`

type ContentProps = {
  isActive?: boolean
}

export const Content = styled.div<ContentProps>`
  ${({ theme, isActive }) => css`
    display: block;
    padding: 0 18px;
    max-height: ${isActive ? '100%' : 0};
    overflow: hidden;
    transition: max-height 0.2s ease-out;
  `}
`
