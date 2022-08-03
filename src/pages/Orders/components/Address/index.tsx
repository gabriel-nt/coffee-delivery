import { MapPinLine } from 'phosphor-react';
import { InputField } from '../../../../components/InputField';

import { ShippingAddress } from './../../../../reducers/cart/reducer';
import {
  AddressContainer,
  AddressDescription,
  AddressField,
  AddressForm,
} from './styles';

enum AddressLabel {
  city = 'Cidade',
  state = 'Estado',
  street = 'Rua',
  number = 'Número',
  zipCode = 'CEP',
  complement = 'Complemento',
  neighborhood = 'Bairro',
}

interface AddressProps {
  address?: ShippingAddress | null;
}

export function Address({ address }: AddressProps) {
  return (
    <AddressContainer>
      <AddressDescription>
        <MapPinLine size={26} />

        <div className="title">
          <h3>Endereço de Entrega</h3>
          <p>Confira o seu endereço informado no momento da compra</p>
        </div>
      </AddressDescription>

      <AddressForm>
        {address &&
          Object.keys(address).map((key: string) => (
            <AddressField key={key} data-field={key}>
              <label>{AddressLabel[key as keyof ShippingAddress]}</label>
              <InputField
                readOnly
                type="text"
                value={address[key as keyof ShippingAddress]}
              />
            </AddressField>
          ))}
      </AddressForm>
    </AddressContainer>
  );
}
