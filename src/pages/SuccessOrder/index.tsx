import { Header } from '../../components/Header';
import { Information } from './Information';

import { SuccessOrderWrapper } from './styles';

export function SuccessOrder() {
  return (
    <>
      <Header />

      <SuccessOrderWrapper>
        <div>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>

        <Information />
      </SuccessOrderWrapper>
    </>
  );
}
