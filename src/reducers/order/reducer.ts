import produce from 'immer';
import { ActionTypes } from './actions';
import { CartState } from '../cart/reducer';

export interface Order extends CartState {
  id: number;
  created_at: Date;
  updated_at: Date;
}

interface OrderState {
  orders: Order[];
}

export const orderReducer = (state: OrderState, action: any) => {
  switch (action.type) {
    case ActionTypes.CREATE_ORDER:
      return produce(state, (draft) => {
        draft.orders.push(action.payload.order);
      });
    default:
      return state;
  }
};
