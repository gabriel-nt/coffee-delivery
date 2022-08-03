import { createContext, useContext, useEffect, useReducer } from 'react';
import { createOrderAction } from '../reducers/order/actions';
import { Order, orderReducer } from '../reducers/order/reducer';

interface OrderContextProviderProps {
  children: React.ReactNode;
}

interface OrderContextData {
  orders: Order[];
  createOrder: (order: Order) => void;
}

export const OrderContext = createContext({} as OrderContextData);

export const OrderContextProvider = ({
  children,
}: OrderContextProviderProps) => {
  const [orderState, dispatch] = useReducer(
    orderReducer,
    {
      orders: [],
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:orders-state-1.0.0',
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return {
        orders: [],
      };
    },
  );

  const createOrder = (order: Order) => {
    dispatch(createOrderAction(order));
  };

  useEffect(() => {
    const stateJSON = JSON.stringify(orderState);

    localStorage.setItem('@coffee-delivery:orders-state-1.0.0', stateJSON);
  }, [orderState]);

  return (
    <OrderContext.Provider
      value={{
        createOrder,
        orders: orderState.orders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => useContext(OrderContext);
