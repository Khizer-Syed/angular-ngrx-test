import {createSelector} from '@ngrx/store';
import {CartItem} from "../model/cart-item.model";

export interface CartFeatureState {
  cartItems: CartItem[],
  totalNumberOfItems: number
}

export const selectCartState = (state: CartFeatureState) => state;

export const selectCartItems = createSelector(
  selectCartState,
  (state: any | undefined) => {
    return state?.cartFeature?.cartItems;
  }
);

export const selectCartTotalPrice = createSelector(
  selectCartState,
  (state: any | undefined) => {
    /**
     * You need to iterate over the cartItems and multiply the cartItem.item.price with cartItem.numberOfItems and return the total
     */
    return 0
  }
);
