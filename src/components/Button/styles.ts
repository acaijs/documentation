import styled, { css } from 'styled-components'

import { lighten, transparentize } from 'polished'

import { ButtonProps } from '.'

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, bg }) => css`
    display: inline-flex;
    appearance: none;
    align-items: center;
    justify-content: center;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    font-weight: ${theme.fontWeights.medium};
    font-size: 1rem;
    color: ${theme.colors.white};
    padding: 1rem 2rem;
    background: ${theme.colors[bg!]};
    border-radius: ${theme.radii.md};
    cursor: pointer;
    transition: 0.3s;
    font-family: inherit;
    text-decoration: none;

    &:hover {
      background: ${lighten('0.1', theme.colors[bg!])};

      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%),
        0 2px 4px -1px rgb(0 0 0 / 6%);
    }

    &:focus {
      box-shadow: 0 0 0 3px ${transparentize('0.5', theme.colors[bg!])};
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;

      & + span {
        margin-left: ${theme.spaces.xs};
      }
    }
  `}
`
