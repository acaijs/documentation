import styled, { css } from "styled-components"

import { lighten } from "polished"

export const Wrapper = styled.aside`
  ${({ theme }) => css`
    position: static;
    border-right: 1px solid ${lighten("0.5", theme.colors.grey)};
    width: 250px;
    margin-right: ${theme.spaces.xs};
  `}
`

export const ListItem = styled.ul`
`

export const Item = styled.li`
`

export const ItemLink = styled.a`
  ${({ theme }) => css`
    padding: 0.35rem;
    color: ${theme.colors.black};
    text-decoration: none;
    border-radius: ${theme.radii.md};

    &:hover {
      background: ${lighten("0.5", theme.colors.primary)};
    }
  `}
`
