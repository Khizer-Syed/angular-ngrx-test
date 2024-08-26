import { createReducer, on } from '@ngrx/store';
import { CartFeatureState } from "./cart.selector";
import { CartItem } from "../model/cart-item.model";
import { CatalogPageActions } from "../../catalog/actions/catalog-page.actions";
import { CartPageActions } from "../actions/cart-page.actions";


export const initialState: CartFeatureState = {
  cartItems: [],
  totalNumberOfItems: 0
};

const getNumberOfItems = (cartItems: CartItem[]): number => {
  return cartItems.reduce((partialSum, cartItem) => partialSum + cartItem.numberOfItems, 0);
}

export const cartReducer = createReducer(
  initialState,
  on(CatalogPageActions.addItemToCart, (state: CartFeatureState, { item }) => {
    /**
     * 1. Find out if the item already exists in the cart
     * 2. If the item exists in the cart, then you need to update the item count as well as totalNumberOfItems.
     * 3. If the item does not exist in the cart, then you need to add the item, update the item count and totalNumberOfItems
     */
      return {
        ...state
      }
    }
  ),
  on(CartPageActions.reduceNumberOfItemInCart, (state: CartFeatureState, { cartItem }) => {
    /**
     * 1. You need to update the item count as well as totalNumberOfItems.
     * 2. If the item count is 0, then you need to remove the item from the cart
     */
    return {
      ...state
    }
  }),
  on(CartPageActions.increaseNumberOfItemInCart, (state: CartFeatureState, { cartItem }) => {
    /**
     * You just need to increase the item count
     */
    return {
      ...state
    }
  }),
  on(CartPageActions.removeItemFromCart, (state: CartFeatureState, { cartItem }) => {
    /**
     * You need to remove the item from the cart
     */
    return {
      ...state
    }
  }),
);
