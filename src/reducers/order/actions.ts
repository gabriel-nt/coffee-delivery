import { Order } from './reducer';

export enum ActionTypes {
  CREATE_ORDER = 'CREATE_ORDER',
}

export const createOrderAction = (order: Order) => ({
  type: ActionTypes.CREATE_ORDER,
  payload: {
    order,
  },
});
