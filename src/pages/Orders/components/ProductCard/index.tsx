import React from 'react';
import { Coffee } from '../../../../reducers/cart/reducer';
import { formatPrice } from '../../../../utils/format';
import { Tags } from '../../../Home/components/Card/styles';
import {
  ProductCardContainer,
  ProductCardContent,
  ProductCardHeader,
  ProductCardFooter,
} from './styles';

export function ProductCard({
  product: { image, name, totalPrice, quantity, tags, id, info },
}: {
  product: Coffee;
}) {
  return (
    <ProductCardContainer>
      <img src={`/coffees/${image}`} alt={name} />

      <ProductCardContent>
        <ProductCardHeader>
          <span>{name}</span>
          <div>
            <strong>R$ {formatPrice(totalPrice)}</strong>
          </div>
        </ProductCardHeader>

        <ProductCardFooter>
          <span>{info}</span>
          <b>{quantity} unidade</b>
          <Tags>
            {tags.map((tag) => (
              <span key={`${tag}-${id}`}>{tag}</span>
            ))}
          </Tags>
        </ProductCardFooter>
      </ProductCardContent>
    </ProductCardContainer>
  );
}
