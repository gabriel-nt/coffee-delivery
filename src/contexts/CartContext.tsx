import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';

import {
  addProductToCartAction,
  definePaymentMethodAction,
  removeProductFromCartAction,
  createShippingAddressAction,
  updateProductQuantityAction,
  resetCartAction,
} from '../reducers/cart/actions';

import {
  Coffee,
  cartReducer,
  PaymentMethods,
  ShippingAddress,
} from '../reducers/cart/reducer';

interface CartContextProviderProps {
  children: React.ReactNode;
}

interface UpdateProductQuantityData {
  productId: number;
  newQuantity: number;
}

interface CartContextData {
  cart: {
    amount: number;
    products: Coffee[];
    totalProducts: number;
    numberOfItems: number;
    deliveryAmount: number;
    paymentMethod: PaymentMethods | null;
    shippingAddress: ShippingAddress | null;
  };
  isDisabledSubmitButton: boolean;
  resetCart: () => void;
  addProductToCart: (product: Coffee) => void;
  removeProductFromCart: (productId: number) => void;
  definePaymentMethod: (paymentMethod: PaymentMethods) => void;
  updateProductQuantity: (data: UpdateProductQuantityData) => void;
  createShippingAddress: (shippingAddress: ShippingAddress) => void;
}

export const CartContext = createContext({} as CartContextData);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [isDisabledSubmitButton, setIsDisabledSubmitButton] = useState(true);

  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      amount: 0,
      products: [],
      numberOfItems: 0,
      totalProducts: 0,
      paymentMethod: null,
      deliveryAmount: 3.5,
      shippingAddress: null,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return {
        amount: 0,
        products: [],
        totalProducts: 0,
        numberOfItems: 0,
        deliveryAmount: 3.5,
        paymentMethod: null,
        shippingAddress: null,
      };
    },
  );

  const resetCart = () => {
    dispatch(resetCartAction());
  };

  const addProductToCart = (product: Coffee) => {
    dispatch(addProductToCartAction(product));
  };

  const removeProductFromCart = (productId: number) => {
    dispatch(removeProductFromCartAction(productId));
  };

  const definePaymentMethod = (paymentMethod: PaymentMethods) => {
    dispatch(definePaymentMethodAction(paymentMethod));
  };

  const createShippingAddress = (shippingAddress: ShippingAddress) => {
    dispatch(createShippingAddressAction(shippingAddress));
  };

  const updateProductQuantity = ({
    productId,
    newQuantity,
  }: UpdateProductQuantityData) => {
    dispatch(
      updateProductQuantityAction({
        productId,
        newQuantity,
      }),
    );
  };

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState);

    const { numberOfItems, paymentMethod, shippingAddress } = cartState;

    if (
      numberOfItems > 0 &&
      paymentMethod &&
      shippingAddress &&
      validadeShippingAddress(shippingAddress)
    ) {
      setIsDisabledSubmitButton(false);
    } else {
      setIsDisabledSubmitButton(true);
    }

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON);
  }, [cartState]);

  const validadeShippingAddress = ({
    city,
    neighborhood,
    number,
    state,
    street,
    zipCode,
  }: ShippingAddress) => {
    if (city && neighborhood && number && state && street && zipCode) {
      return true;
    }

    return false;
  };

  return (
    <CartContext.Provider
      value={{
        resetCart,
        cart: cartState,
        addProductToCart,
        definePaymentMethod,
        updateProductQuantity,
        createShippingAddress,
        removeProductFromCart,
        isDisabledSubmitButton,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
