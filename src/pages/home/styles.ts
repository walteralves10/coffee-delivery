import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  gap: 5rem;
`

export const Introduction = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 5rem 0;

  background: radial-gradient(
    circle,
    rgba(128, 71, 248, 0.1),
    rgba(235, 193, 54, 0.1),
    ${(props) => props.theme.background}
  );
`

export const Title = styled.div`
  max-width: 36.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    ${(props) => props.theme.titleXL}
    color: ${(props) => props.theme['base-title']};
    -webkit-text-stroke: 2px ${(props) => props.theme['base-title']};
    filter: drop-shadow(0px 4px 4px rgba(39, 34, 33, 25%));
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    line-height: 130%;
  }
`

export const Information = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-top: 4.125rem;
`

export const GroupInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const BaseSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 50%;

    color: ${(props) => props.theme.background};
  }
`

export const ShoppingSpan = styled(BaseSpan)`
  svg {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
export const TimerSpan = styled(BaseSpan)`
  svg {
    background: ${(props) => props.theme.yellow};
  }
`
export const PackageSpan = styled(BaseSpan)`
  svg {
    background: ${(props) => props.theme['base-text']};
  }
`
export const CoffeeSpan = styled(BaseSpan)`
  svg {
    background: ${(props) => props.theme.purple};
  }
`

export const CoffeeSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    line-height: 130%;
    font-weight: 800;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 3rem;
  }
`

export const Category = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    border-radius: 100px;
    border: 1px solid ${(props) => props.theme.yellow};
    padding: 0.375rem 0.75rem;

    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 0.625rem;
    font-weight: bold;

    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    &[data-tag='true'] {
      background: ${(props) => props.theme['yellow-light']};
    }
  }
`
