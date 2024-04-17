import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 10rem;

  padding: 2rem 10rem;
  img {
    align-self: flex-end;
  }
`

export const Informations = styled.div`
  h1 {
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
  }
`

export const InfoDelivery = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 6px 36px;
  background: ${(props) => props.theme.background};

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    > span {
      display: flex;
      padding: 0.5rem;
      border-radius: 50%;
      color: ${(props) => props.theme.white};
    }

    > div {
      display: flex;
      flex-direction: column;
    }
  }
`

export const Gradient = styled.div`
  padding: 1px;
  border-radius: 6px 36px;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.yellow},
    ${(props) => props.theme.purple}
  );
`
