import produce from 'immer';
import { formatNumber } from '../../utils/format';
import { ActionTypes } from './actions';

export type PaymentMethods = 'cash' | 'credit' | 'debit';

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  info: string;
  image: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

export interface ShippingAddress {
  city?: string;
  state?: string;
  street?: string;
  number?: string;
  zipCode?: string;
  complement?: string;
  neighborhood?: string;
}

export interface CartState {
  products: Coffee[];
  amount: number;
  numberOfItems: number;
  totalProducts: number;
  deliveryAmount: number;
  paymentMethod: PaymentMethods | null;
  shippingAddress: ShippingAddress | null;
}

export const cartReducer = (state: CartState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_CART: {
      const findProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.newProduct.id,
      );

      return produce(state, (draft) => {
        const productQuantity = action.payload.newProduct.quantity;

        if (findProductIndex !== -1) {
          draft.numberOfItems =
            productQuantity > 1
              ? state.numberOfItems +
                draft.products[findProductIndex].quantity -
                productQuantity
              : state.numberOfItems;
          draft.products[findProductIndex] = action.payload.newProduct;
        } else {
          draft.products.push(action.payload.newProduct);
          draft.numberOfItems = state.numberOfItems + productQuantity;
        }

        draft.totalProducts = formatNumber(
          draft.products.reduce(
            (prevValue, currentValue) => prevValue + currentValue.totalPrice,
            0,
          ),
        );

        draft.amount = formatNumber(draft.totalProducts + draft.deliveryAmount);
      });
    }
    case ActionTypes.REMOVE_PRODUCT_CART: {
      const existProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.productId,
      );

      if (existProductIndex < 0) {
        return state;
      }

      return produce(state, (draft) => {
        draft.products.splice(existProductIndex, 1);
        draft.totalProducts = formatNumber(
          state.totalProducts - state.products[existProductIndex].totalPrice,
        );
        draft.amount = formatNumber(draft.totalProducts + state.deliveryAmount);
        draft.numberOfItems =
          state.numberOfItems - state.products[existProductIndex].quantity;
      });
    }
    case ActionTypes.UPDATE_PRODUCT_QUANTITY: {
      const findProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.productId,
      );

      if (findProductIndex < 0) {
        return state;
      }

      const newQuantity = action.payload.newQuantity;

      return produce(state, (draft) => {
        draft.numberOfItems =
          state.numberOfItems +
          newQuantity -
          state.products[findProductIndex].quantity;
        draft.products[findProductIndex].quantity = newQuantity;
        draft.products[findProductIndex].totalPrice =
          draft.products[findProductIndex].price * newQuantity;

        draft.totalProducts = formatNumber(
          draft.products.reduce(
            (prevValue, currentValue) => prevValue + currentValue.totalPrice,
            0,
          ),
        );

        draft.amount = formatNumber(draft.totalProducts + draft.deliveryAmount);
      });
    }
    case ActionTypes.CREATE_SHIPPING_ADDRESS:
      return produce(state, (draft) => {
        draft.shippingAddress = action.payload.shippingAddress;
      });
    case ActionTypes.DEFINE_PAYMENT_METHOD:
      return produce(state, (draft) => {
        draft.paymentMethod = action.payload.paymentMethod;
      });
    case ActionTypes.RESET_CART:
      return {
        amount: 0,
        products: [],
        totalProducts: 0,
        numberOfItems: 0,
        deliveryAmount: 3.5,
        paymentMethod: null,
        shippingAddress: null,
      };
    default:
      return state;
  }
};
