import { ReactNode } from 'react';
import { useCartContext } from '../../../../contexts/CartContext';
import { PaymentMethods } from '../../../../reducers/cart/reducer';
import { PaymentInputContainer, PaymentInputContent } from './styles';

export interface PaymentInputProps {
  label: string;
  icon: ReactNode;
  name: PaymentMethods;
}

export function PaymentInput({ icon, label, name }: PaymentInputProps) {
  const {
    definePaymentMethod,
    cart: { paymentMethod },
  } = useCartContext();

  const handleChangeInput = () => {
    definePaymentMethod(name);
  };

  return (
    <PaymentInputContainer>
      <input
        id={name}
        type="radio"
        value={name}
        name="paymentMethod"
        onChange={handleChangeInput}
        checked={paymentMethod === name}
      />

      <label htmlFor={name}>
        <PaymentInputContent>
          {icon}
          <span>{label}</span>
        </PaymentInputContent>
      </label>
    </PaymentInputContainer>
  );
}
