import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from 'react'
import { TypeCoffee, TypeOrder, cartReducer } from '../reducers/cart/reducer'
import {
  addCoffeeToCartAction,
  addQuantityToCoffeeAction,
  checkoutOrderAction,
  removeCoffeeToCartAction,
  removeQuantityToCoffeeAction,
} from '../reducers/cart/actions'
import { useNavigate } from 'react-router-dom'

interface CartContextType {
  cart: TypeCoffee[]
  order: TypeOrder
  addCoffeeToCart: (coffee: TypeCoffee) => void
  removeCoffeeToCart: (id: string) => void
  toggleQuantityCoffee: (toggle: boolean, id: string) => void
  checkoutOrder: (order: TypeOrder) => void
  validateSelectedCoffeeInTheCart: (id: string) => boolean
}

const KEY_ORDER = '@coffee-delivery:order-0.0.0'

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [state, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      order: {
        cep: '',
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: '',
        payment: '',
      },
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(KEY_ORDER)

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )
  const navigate = useNavigate()

  const { cart, order } = state

  useEffect(() => {
    const stateJSON = JSON.stringify(state)
    localStorage.setItem(KEY_ORDER, stateJSON)
  }, [state])

  function addCoffeeToCart(coffee: TypeCoffee) {
    dispatch(addCoffeeToCartAction(coffee))
  }

  function removeCoffeeToCart(id: string) {
    dispatch(removeCoffeeToCartAction(id))
  }

  function toggleQuantityCoffee(toggle: boolean, id: string) {
    if (toggle) {
      dispatch(addQuantityToCoffeeAction(id))
    } else {
      dispatch(removeQuantityToCoffeeAction(id))
    }
  }

  const checkoutOrder = useCallback(
    (order: TypeOrder) => {
      dispatch(checkoutOrderAction(order))
      navigate('/success')
    },
    [navigate],
  )

  const validateSelectedCoffeeInTheCart = useCallback(
    (id: string) => {
      return cart.some((coffee) => coffee.id === id)
    },
    [cart],
  )

  const values = useMemo(
    () => ({
      cart,
      order,
      addCoffeeToCart,
      removeCoffeeToCart,
      toggleQuantityCoffee,
      checkoutOrder,
      validateSelectedCoffeeInTheCart,
    }),
    [cart, order, checkoutOrder, validateSelectedCoffeeInTheCart],
  )

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}
