import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { Container, Gradient, InfoDelivery, Informations } from './styles'
import { useTheme } from 'styled-components'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Success() {
  const { order } = useContext(CartContext)
  const theme = useTheme()
  console.log(order)

  return (
    <Container>
      <Informations>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <Gradient>
          <InfoDelivery>
            <div>
              <span style={{ background: theme.purple }}>
                <MapPin weight="fill" />
              </span>
              <div>
                <span>
                  Entrega em{' '}
                  <strong>
                    {order.street}, {order.number}
                  </strong>
                </span>
                <span>
                  {order.neighborhood} - {order.city}, {order.state}
                </span>
              </div>
            </div>
            <div>
              <span style={{ background: theme.yellow }}>
                <Timer weight="fill" />
              </span>
              <div>
                Previsão de entrega
                <strong>20 min - 30 min</strong>
              </div>
            </div>
            <div>
              <span style={{ background: theme['yellow-dark'] }}>
                <CurrencyDollar />
              </span>
              <div>
                <span>Pagamento na entrega</span>
                <strong>{order.payment}</strong>
              </div>
            </div>
          </InfoDelivery>
        </Gradient>
      </Informations>

      <img src="/src/assets/Illustration.svg" alt="" />
    </Container>
  )
}
