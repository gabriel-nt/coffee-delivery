import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';
import { PaymentContainer, PaymentDescription, PaymentContent } from './styles';
import { PaymentInput, PaymentInputProps } from './../PaymentInput';

export function PaymentMethods() {
  const methods: PaymentInputProps[] = [
    {
      name: 'credit',
      label: 'Cartão de Crédito',
      icon: <CreditCard size={16} />,
    },
    {
      name: 'debit',
      label: 'Cartão de Débito',
      icon: <Bank size={16} />,
    },
    {
      name: 'cash',
      label: 'Dinheiro',
      icon: <Money size={16} />,
    },
  ];

  return (
    <PaymentContainer>
      <PaymentDescription>
        <CurrencyDollar size={22} weight="fill" />

        <div className="title">
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </PaymentDescription>

      <PaymentContent>
        {methods.map((method) => (
          <div key={method.name}>
            <PaymentInput
              icon={method.icon}
              name={method.name}
              label={method.label}
            />
          </div>
        ))}
      </PaymentContent>
    </PaymentContainer>
  );
}
