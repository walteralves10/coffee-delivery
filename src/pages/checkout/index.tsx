import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from '@phosphor-icons/react'
import {
  Container,
  FormContainer,
  ItensContainer,
  FormCard,
  Label,
  Input,
  CartItens,
  GroupButton,
  Item,
  Divider,
  TotalOrder,
  ItemOptions,
  Action,
  ButtonPayment,
} from './styles'
import { useTheme } from 'styled-components'
import { useCallback, useContext, useEffect } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const newOrderFormValidationSchema = zod.object({
  cep: zod.string().min(8, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a Rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(1, 'Informe o estado'),
  payment: zod.enum(['credito', 'debito', 'dinheiro']),
})

type newOrderFormData = {
  cep: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
  payment: 'credito' | 'debito' | 'dinheiro' | ''
}

export function Checkout() {
  const {
    cart,
    order,
    removeCoffeeToCart,
    toggleQuantityCoffee,
    checkoutOrder,
  } = useContext(CartContext)
  const theme = useTheme()

  const totalPayable = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  const formattedPrice = (price: number) => {
    return price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  }

  const handleRemoveCoffeeToCart = useCallback(
    (id: string) => {
      removeCoffeeToCart(id)
    },
    [removeCoffeeToCart],
  )
  const handleMinusQuantity = useCallback(
    (id: string) => {
      toggleQuantityCoffee(false, id)
    },
    [toggleQuantityCoffee],
  )
  const handlePlusQuantity = useCallback(
    (id: string) => {
      toggleQuantityCoffee(true, id)
    },
    [toggleQuantityCoffee],
  )

  const {
    handleSubmit,
    reset,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm<newOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      payment: '',
    },
  })

  useEffect(() => {
    reset(order)
  }, [order, reset])

  const handleNewOrder = (data: newOrderFormData) => {
    if (cart.length === 0) {
      return alert('É preciso ter pelo menos um item no carrinho')
    }

    checkoutOrder(data)
    reset()
  }
  const payment = watch('payment')

  return (
    <Container>
      <FormContainer>
        <h2>Complete seu pedido</h2>

        <FormCard>
          <Label>
            <MapPinLine size={22} color={theme['yellow-dark']} />
            <div>
              <span>Endereço de entrega</span>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </Label>

          <form>
            <Input
              type="text"
              placeholder="CEP"
              style={{ gridArea: 'cep' }}
              {...register('cep')}
            />
            <Input
              type="text"
              placeholder="Rua"
              style={{ gridArea: 'street' }}
              {...register('street')}
            />
            <Input
              type="text"
              placeholder="Número"
              style={{ gridArea: 'number' }}
              {...register('number')}
            />
            <Input
              type="text"
              placeholder="Complemento"
              style={{ gridArea: 'complement' }}
              {...register('complement')}
            />

            <Input
              type="text"
              placeholder="Bairro"
              style={{ gridArea: 'neighborhood' }}
              {...register('neighborhood')}
            />
            <Input
              type="text"
              placeholder="Cidade"
              style={{ gridArea: 'city' }}
              {...register('city')}
            />
            <Input
              type="text"
              placeholder="UF"
              style={{ gridArea: 'state' }}
              {...register('state')}
            />
          </form>
        </FormCard>

        <FormCard>
          <Label>
            <CurrencyDollar size={22} color={theme.purple} />
            <div>
              <span>Pagamento</span>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </Label>

          <GroupButton>
            <ButtonPayment
              data-state={payment === 'credito'}
              {...register('payment')}
              onClick={() => setValue('payment', 'credito')}
            >
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </ButtonPayment>
            <ButtonPayment
              data-state={payment === 'debito'}
              {...register('payment')}
              onClick={() => setValue('payment', 'debito')}
            >
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </ButtonPayment>
            <ButtonPayment
              data-state={payment === 'dinheiro'}
              {...register('payment')}
              onClick={() => setValue('payment', 'dinheiro')}
            >
              <Money size={16} />
              DINHEIRO
            </ButtonPayment>
          </GroupButton>
        </FormCard>
      </FormContainer>

      <ItensContainer>
        <h2>Cafés selecionados</h2>

        <CartItens>
          {cart.map((coffee) => (
            <div key={coffee.id}>
              <Item>
                <ItemOptions>
                  <img src={coffee.image} alt="" />
                  <div>
                    <span>{coffee.title}</span>

                    <Action>
                      <div>
                        <Minus
                          onClick={() => handleMinusQuantity(coffee.id)}
                          size={14}
                        />
                        <span>{coffee.quantity}</span>
                        <Plus
                          onClick={() => handlePlusQuantity(coffee.id)}
                          size={14}
                        />
                      </div>
                      <button
                        onClick={() => handleRemoveCoffeeToCart(coffee.id)}
                      >
                        <Trash size={16} />
                        REMOVER
                      </button>
                    </Action>
                  </div>
                </ItemOptions>
                <strong>
                  {formattedPrice(
                    Number(coffee.price.toFixed(2)) * coffee.quantity,
                  )}
                </strong>
              </Item>
              <Divider></Divider>
            </div>
          ))}

          <TotalOrder>
            <div>
              <span>Total de itens</span>
              <span>{formattedPrice(totalPayable)}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>{formattedPrice(totalPayable + 3.5)}</strong>
            </div>
          </TotalOrder>

          <button type="submit" onClick={handleSubmit(handleNewOrder)}>
            CONFIRMAR PEDIDO
          </button>
        </CartItens>
      </ItensContainer>
    </Container>
  )
}
