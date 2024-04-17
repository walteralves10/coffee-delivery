import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 1;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;

  background: ${(props) => props.theme.background};
`
export const Actions = styled.div`
  position: relative;
  display: flex;
  gap: 0.75rem;
`

export const BaseButton = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0.5rem;

  cursor: pointer;
  border: none;
  border-radius: 6px;
`

export const LocationButton = styled(BaseButton)`
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  text-decoration: none;

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const CartButton = styled(BaseButton)`
  background: ${(props) => props.theme['yellow-light']};
  text-decoration: none;
  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    text-align: center;
    justify-content: center;

    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    border-radius: 50%;
    font-size: 0.875rem;
    font-weight: bold;

    position: absolute;
    top: -0.625rem;
    right: -0.625rem;
  }
`
