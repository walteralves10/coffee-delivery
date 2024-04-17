import { Actions, actionTypes } from './actions'

export type TypeCoffee = {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
  quantity?: number
}

export type TypeOrder = {
  cep: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
  payment: 'credito' | 'debito' | 'dinheiro' | ''
  cart?: TypeCoffee[]
}

interface CartState {
  cart: TypeCoffee[]
  order: TypeOrder
}

export function cartReducer(state: CartState, action: Actions) {
  switch (action.type) {
    case actionTypes.ADD_NEW_CYCLE:
      return {
        ...state,
        cart: [...state.cart, action.payload.newCoffee],
      }
    case actionTypes.REMOVE_CYCLE:
      return {
        ...state,
        cart: state.cart.filter(
          (coffee) => coffee.id !== action.payload.coffeeId,
        ),
      }
    case actionTypes.ADD_QUANTITY_CART:
      return {
        ...state,
        cart: state.cart.map((coffee) => {
          if (coffee.id === action.payload.coffeeId) {
            return { ...coffee, quantity: coffee.quantity + 1 }
          } else {
            return coffee
          }
        }),
      }
    case actionTypes.REMOVE_QUANTITY_CART:
      return {
        ...state,
        cart: state.cart.map((coffee) => {
          if (coffee.id === action.payload.coffeeId && coffee.quantity > 1) {
            return { ...coffee, quantity: coffee.quantity - 1 }
          } else {
            return coffee
          }
        }),
      }
    case actionTypes.CHECKOUT_ORDER:
      return {
        ...state,
        order: { ...action.payload.order },
      }

    default:
      return state
  }
}
