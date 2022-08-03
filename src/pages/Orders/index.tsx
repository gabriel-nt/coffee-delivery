import { Header } from '../../components/Header';
import { useOrderContext } from '../../contexts/OrderContext';
import {
  OrderInfo,
  ButtonHome,
  OrdersWrapper,
  OrderProducts,
  OrderShipping,
} from './styles';
import { formatDate, formatPrice } from './../../utils/format';
import { ProductCard } from './components/ProductCard';
import { Address } from './components/Address';
import { NavLink } from 'react-router-dom';

export enum PaymentType {
  debit = 'Cartão de Débito',
  credit = 'Cartão de Crédito',
  cash = 'Pagamento em Dinheiro',
}

export function Orders() {
  const { orders } = useOrderContext();

  return (
    <>
      <Header />

      <OrdersWrapper>
        <div>
          <h1>Meus pedidos</h1>

          {orders.length > 0 ? (
            <>
              {orders.map(
                ({
                  id,
                  created_at,
                  amount,
                  paymentMethod,
                  deliveryAmount,
                  shippingAddress,
                  products,
                }) => (
                  <div className="order" key={id}>
                    <OrderInfo>
                      <span>Pedido: {id}</span>
                      <span>Data: {formatDate(created_at)}</span>
                      {paymentMethod && (
                        <span>Pagamento: {PaymentType[paymentMethod]}</span>
                      )}
                      <span>Frete: R$ {formatPrice(deliveryAmount)}</span>
                      <span>Total: R$ {formatPrice(amount)}</span>
                    </OrderInfo>

                    <OrderProducts>
                      <div>
                        {products.map((product) => (
                          <ProductCard product={product} />
                        ))}
                      </div>
                    </OrderProducts>

                    <OrderShipping>
                      <Address address={shippingAddress} />
                    </OrderShipping>
                  </div>
                ),
              )}
            </>
          ) : (
            <>
              <p>Nenhum pedido realizado</p>

              <ButtonHome to="/">voltar para home</ButtonHome>
            </>
          )}
        </div>
      </OrdersWrapper>
    </>
  );
}
