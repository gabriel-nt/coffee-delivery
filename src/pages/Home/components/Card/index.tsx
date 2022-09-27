import { ShoppingCart } from 'phosphor-react';
import { useState } from 'react';
import { QuantityInput } from '../../../../components/QuantityInput';
import { useCartContext } from '../../../../contexts/CartContext';
import { Coffee } from '../../../../reducers/cart/reducer';
import { formatPrice } from '../../../../utils/format';

import {
  CardContainer,
  Tags,
  CardFooter,
  FooterPrice,
  ActionsContainer,
} from './styles';

export interface CardProps {
  coffee: Omit<Coffee, 'quantity' | 'totalPrice'>;
}

export function Card({ coffee }: CardProps) {
  const [quantity, setQuantity] = useState(1);
  const { id, tags, name, info, image, price } = coffee;

  const { addProductToCart } = useCartContext();

  const handleAddProductToCart = () => {
    addProductToCart({
      ...coffee,
      quantity,
      totalPrice: price * quantity,
    });
  };

  return (
    <CardContainer>
      <img src={`/coffees/${image}`} alt={name} />

      <Tags>
        {tags.map((tag) => (
          <span key={`${tag}-${id}`}>{tag}</span>
        ))}
      </Tags>

      <h1 className="title">{name}</h1>
      <p className="description">{info}</p>

      <CardFooter>
        <FooterPrice>
          <span>R$</span>
          <strong>{formatPrice(price)}</strong>
        </FooterPrice>

        <ActionsContainer>
          <QuantityInput onChangeValue={(value) => setQuantity(value)} />
          <button type="button" onClick={handleAddProductToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </ActionsContainer>
      </CardFooter>
    </CardContainer>
  );
}
