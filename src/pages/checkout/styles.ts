import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 10rem;
  padding: 2rem 10rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    line-height: 130%;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.9375rem;
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`

export const FormCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};

  form {
    display: grid;
    grid-template-areas:
      'cep . .'
      'street street street'
      'number complement complement'
      'neighborhood city state';
    grid-template-columns: 12.5rem 1fr 3.75rem;
    grid-gap: 0.75rem 1rem;
  }
`

export const Label = styled.div`
  display: flex;
  gap: 0.5rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    span:first-child {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1rem;
    }
    span:last-child {
      font-size: 0.875rem;
    }
  }
`

export const Input = styled.input`
  display: flex;
  padding: 0.75rem;
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-dark']};
  }
`

export const GroupButton = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  grid-gap: 0 0.75rem;
`

export const ButtonPayment = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  border: 1px solid transparent;
  border-radius: 6px;
  padding: 1rem;
  background: ${(props) => props.theme['base-button']};

  font-size: 0.75rem;
  line-height: 160%;
  cursor: pointer;

  &:hover {
    box-shadow: none;
    border: 1px solid transparent;
    background: ${(props) => props.theme['base-hover']};
  }

  &[data-state='true'] {
    box-shadow: none;
    border: 1px solid ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const ItensContainer = styled.div`
  width: 28rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const CartItens = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > button {
    background: ${(props) => props.theme.yellow};
    color: white;

    border: none;
    border-radius: 6px;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`

export const Item = styled.div`
  padding: 0.5rem 0.25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const ItemOptions = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const Action = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};
  }

  > button {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};
    line-height: 160%;
    font-size: 0.75rem;

    padding: 0 0.5rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }
  }

  svg {
    color: ${(props) => props.theme.purple};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

export const Divider = styled.div`
  border: 1px solid ${(props) => props.theme['base-button']};
`
export const TotalOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
  }

  span {
    font-size: 0.875rem;
  }

  strong {
    font-size: 1.25rem;
  }
`
