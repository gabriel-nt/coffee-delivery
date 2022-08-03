import { MapPinLine } from 'phosphor-react';
import { useEffect } from 'react';

import { FormProvider, useForm } from 'react-hook-form';
import { InputField } from '../../../../components/InputField';
import { useCartContext } from '../../../../contexts/CartContext';
import { ShippingAddress as ShippingFieldNames } from './../../../../reducers/cart/reducer';

import {
  ShippingContainer,
  ShippingForm,
  ShippingDescription,
  ShippingField,
} from './styles';

interface Field {
  name: keyof ShippingFieldNames;
  placeholder: string;
  type: string;
  info?: string;
  maxLength?: number;
}

const fields: Field[] = [
  {
    name: 'zipCode',
    placeholder: 'CEP',
    type: 'string',
    maxLength: 9,
  },
  {
    name: 'street',
    placeholder: 'Rua',
    type: 'text',
  },
  {
    name: 'number',
    placeholder: 'Número',
    type: 'number',
    maxLength: 4,
  },
  {
    name: 'complement',
    placeholder: 'Complemento',
    info: 'Opcional',
    type: 'text',
  },
  {
    name: 'neighborhood',
    placeholder: 'Bairro',
    type: 'text',
  },
  {
    name: 'city',
    placeholder: 'Cidade',
    type: 'text',
  },
  {
    name: 'state',
    placeholder: 'UF',
    type: 'text',
    maxLength: 2,
  },
];

interface ShippingAddressFormData {
  state: string;
  number: string;
  city: string;
  neighborhood: string;
  complement: string;
  street: string;
  zipCode: string;
}

export function ShippingAddress() {
  const {
    createShippingAddress,
    cart: { shippingAddress },
  } = useCartContext();

  const shippingForm = useForm<ShippingAddressFormData>({
    mode: 'all',
    defaultValues: {
      zipCode: shippingAddress?.zipCode,
      street: shippingAddress?.street,
      number: shippingAddress?.number,
      complement: shippingAddress?.complement,
      neighborhood: shippingAddress?.neighborhood,
      city: shippingAddress?.city,
      state: shippingAddress?.state,
    },
  });

  const { register, getValues } = shippingForm;

  const handleOnBlurInput = () => {
    createShippingAddress(getValues());
  };

  return (
    <ShippingContainer>
      <ShippingDescription>
        <MapPinLine size={22} />

        <div className="title">
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </ShippingDescription>

      <ShippingForm>
        <FormProvider {...shippingForm}>
          {fields.map((field) => (
            <ShippingField key={field.name} data-field={field.name}>
              <InputField
                register={register(field.name, {
                  onBlur: handleOnBlurInput,
                })}
                type={field.type}
                info={field.info}
                maxLength={field.maxLength}
                placeholder={field.placeholder}
              />
            </ShippingField>
          ))}
        </FormProvider>
      </ShippingForm>
    </ShippingContainer>
  );
}
