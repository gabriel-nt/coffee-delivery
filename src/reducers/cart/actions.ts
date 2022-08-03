import { Coffee, PaymentMethods, ShippingAddress } from './reducer';

export enum ActionTypes {
  RESET_CART = 'RESET_CART',
  ADD_PRODUCT_CART = 'ADD_PRODUCT_CART',
  REMOVE_PRODUCT_CART = 'REMOVE_PRODUCT_CART',
  DEFINE_PAYMENT_METHOD = 'DEFINE_PAYMENT_METHOD',
  UPDATE_PRODUCT_QUANTITY = 'UPDATE_PRODUCT_QUANTITY',
  CREATE_SHIPPING_ADDRESS = 'CREATE_SHIPPING_ADDRESS',
}

export const resetCartAction = () => ({
  type: ActionTypes.RESET_CART,
});

export const addProductToCartAction = (newProduct: Coffee) => ({
  type: ActionTypes.ADD_PRODUCT_CART,
  payload: {
    newProduct,
  },
});

export const removeProductFromCartAction = (productId: number) => ({
  type: ActionTypes.REMOVE_PRODUCT_CART,
  payload: {
    productId,
  },
});

export const definePaymentMethodAction = (paymentMethod: PaymentMethods) => ({
  type: ActionTypes.DEFINE_PAYMENT_METHOD,
  payload: {
    paymentMethod,
  },
});

export const updateProductQuantityAction = ({
  newQuantity,
  productId,
}: {
  productId: number;
  newQuantity: number;
}) => ({
  type: ActionTypes.UPDATE_PRODUCT_QUANTITY,
  payload: {
    productId,
    newQuantity,
  },
});

export const createShippingAddressAction = (
  shippingAddress: ShippingAddress,
) => ({
  type: ActionTypes.CREATE_SHIPPING_ADDRESS,
  payload: {
    shippingAddress,
  },
});
