import { TypeCoffee, TypeOrder } from './reducer'

export enum actionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  REMOVE_CYCLE = 'REMOVE_CYCLE',
  ADD_QUANTITY_CART = 'ADD_QUANTITY_CART',
  REMOVE_QUANTITY_CART = 'REMOVE_QUANTITY_CART',
  CHECKOUT_ORDER = 'CHECKOUT_ORDER',
}

export type Actions =
  | {
      type: actionTypes.ADD_NEW_CYCLE
      payload: {
        newCoffee: TypeCoffee
      }
    }
  | {
      type:
        | actionTypes.REMOVE_CYCLE
        | actionTypes.ADD_QUANTITY_CART
        | actionTypes.REMOVE_QUANTITY_CART
      payload: {
        coffeeId: string
      }
    }
  | {
      type: actionTypes.CHECKOUT_ORDER
      payload: {
        order: TypeOrder
      }
    }

export function addCoffeeToCartAction(newCoffee: TypeCoffee) {
  return {
    type: actionTypes.ADD_NEW_CYCLE,
    payload: {
      newCoffee,
    },
  } satisfies Actions
}

export function removeCoffeeToCartAction(id: string) {
  return {
    type: actionTypes.REMOVE_CYCLE,
    payload: {
      coffeeId: id,
    },
  } satisfies Actions
}

export function addQuantityToCoffeeAction(id: string) {
  return {
    type: actionTypes.ADD_QUANTITY_CART,
    payload: {
      coffeeId: id,
    },
  } satisfies Actions
}

export function removeQuantityToCoffeeAction(id: string) {
  return {
    type: actionTypes.REMOVE_QUANTITY_CART,
    payload: {
      coffeeId: id,
    },
  } satisfies Actions
}

export function checkoutOrderAction(order: TypeOrder) {
  return {
    type: actionTypes.CHECKOUT_ORDER,
    payload: {
      order,
    },
  } satisfies Actions
}
