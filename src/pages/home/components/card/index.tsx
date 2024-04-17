import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'
import {
  BuyContainer,
  CoffeeCard,
  CoffeeInformation,
  ActionDiv,
  Tag,
  CartButton,
  TagDiv,
} from './styles'
import { useContext, useMemo, useState } from 'react'
import { TypeCoffee } from '../../../../reducers/cart/reducer'
import { CartContext } from '../../../../contexts/CartContext'

type Props = {
  coffee: TypeCoffee
}

export function Card({ coffee }: Props) {
  const { addCoffeeToCart, validateSelectedCoffeeInTheCart } =
    useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  const isSelected = useMemo(() => {
    return validateSelectedCoffeeInTheCart(coffee.id)
  }, [coffee.id, validateSelectedCoffeeInTheCart])

  const handleSubtractQuantity = () => {
    if (quantity === 1) return

    setQuantity((state) => state - 1)
  }
  const handleSumQuantity = () => {
    setQuantity((state) => state + 1)
  }
  const addCart = () => {
    addCoffeeToCart({ ...coffee, quantity })
  }

  const formattedPrice = (price: number) => {
    return price.toLocaleString('pt-br', { minimumFractionDigits: 2 })
  }

  return (
    <CoffeeCard>
      <img src={coffee.image} alt={coffee.title} />
      <CoffeeInformation>
        <TagDiv>
          {coffee.tags.map((tag) => (
            <Tag key={tag}>{tag.toUpperCase()}</Tag>
          ))}
        </TagDiv>

        <h4>{coffee.title}</h4>
        <p>{coffee.description}</p>
        <BuyContainer>
          <span>
            R$ <strong>{formattedPrice(coffee.price)}</strong>
          </span>
          <div>
            <ActionDiv>
              <Minus onClick={handleSubtractQuantity} size={14} weight="bold" />
              <span>{quantity}</span>
              <Plus onClick={handleSumQuantity} size={14} weight="bold" />
            </ActionDiv>

            <CartButton disabled={isSelected} onClick={addCart}>
              <ShoppingCartSimple size={22} weight="fill" />
            </CartButton>
          </div>
        </BuyContainer>
      </CoffeeInformation>
    </CoffeeCard>
  )
}
