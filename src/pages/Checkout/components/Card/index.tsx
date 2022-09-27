import { useCallback } from 'react';
import { Trash } from 'phosphor-react';

import { formatPrice } from '../../../../utils/format';
import { Coffee } from '../../../../reducers/cart/reducer';
import { useCartContext } from '../../../../contexts/CartContext';
import { QuantityInput } from '../../../../components/QuantityInput';

import { CardContainer, CardContent, CardHeader, CardFooter } from './styles';

interface CardProps {
  coffee: Coffee;
}

export function Card({ coffee }: CardProps) {
  const { removeProductFromCart, updateProductQuantity } = useCartContext();
  const { name, image, price, id, quantity } = coffee;

  const handleUpdateProductQuantity = useCallback(
    (newValue: number) => {
      updateProductQuantity({
        newQuantity: newValue,
        productId: id,
      });
    },
    [id],
  );

  return (
    <CardContainer>
      <img src={`/coffees/${image}`} alt={name} />

      <CardContent>
        <CardHeader>
          <span>{name}</span>
          <div>
            <strong>R$ {formatPrice(price)}</strong>
          </div>
        </CardHeader>

        <CardFooter>
          <QuantityInput
            size="small"
            value={quantity}
            onChangeValue={(value) => handleUpdateProductQuantity(value)}
          />
          <button onClick={(e) => removeProductFromCart(id)}>
            <Trash size={16} />
            <span>Remover</span>
          </button>
        </CardFooter>
      </CardContent>
    </CardContainer>
  );
}
