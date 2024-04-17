import styled from 'styled-components'

export const CoffeeCard = styled.div`
  width: 16rem;
  height: 19.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 6px 36px;

  background: ${(props) => props.theme['base-card']};

  img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: -1.25rem;
    margin-bottom: 0.75rem;
  }
`

export const CoffeeInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  text-align: center;

  h4 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: bold;

    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 130%;
    padding: 0 0.5rem;
  }
`
export const TagDiv = styled.div`
  display: flex;
  gap: 0.25rem;
`
export const Tag = styled.span`
  padding: 0.25rem 0.5rem;
  margin-bottom: 0.5rem;
  align-content: center;
  border-radius: 100px;

  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  font-family: 'Roboto', sans-serif;
  font-size: 0.625rem;
  line-height: 130%;
  font-weight: bold;
`

export const BuyContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 2.0625rem;

  div {
    display: flex;
    gap: 0.5rem;
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
  }

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 900;
  }
`

export const ActionDiv = styled.div`
  padding: 0.5rem;
  background: ${(props) => props.theme['base-button']};

  align-items: center;
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme.purple};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

export const CartButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 0.5rem;

  border: none;
  border-radius: 6px;

  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.purple};
  }

  &:disabled {
    opacity: 0.4;
  }

  &:disabled:hover {
    background: ${(props) => props.theme['purple-dark']};
    opacity: 0.4;
  }
`
