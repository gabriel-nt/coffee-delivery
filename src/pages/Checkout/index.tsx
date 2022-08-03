import { Header } from '../../components/Header';
import { PaymentMethods } from './components/PaymentMethods';
import { ShippingAddress } from './components/ShippingAddress';
import { Summary } from './components/Summary';

import { CheckoutWrapper, CheckoutContent } from './styles';

export function Checkout() {
  return (
    <>
      <Header />

      <CheckoutWrapper>
        <CheckoutContent>
          <h2>Complete seu pedido</h2>

          <ShippingAddress />
          <PaymentMethods />
        </CheckoutContent>

        <Summary />
      </CheckoutWrapper>
    </>
  );
}
