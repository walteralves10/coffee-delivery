import { Outlet } from 'react-router-dom'
import { Header } from '../../components/header'
import { Container } from './styles'

export function Default() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  )
}
