import { MapPin, ShoppingCart, User } from 'phosphor-react';
import { NavLink, useNavigate } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { useCartContext } from '../../contexts/CartContext';
import {
  HeaderContainer,
  HeaderContent,
  Location,
  CartContainer,
  Badge,
  OrderContainer,
} from './syles';

export function Header() {
  const {
    cart: { numberOfItems },
  } = useCartContext();

  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">
          <img src={logo} alt="Logo Coffee Delivery" />
        </NavLink>

        <div>
          <Location>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </Location>

          <CartContainer onClick={() => navigate('/checkout')}>
            <strong>Meu carrinho</strong>
            <Badge>
              <span>{numberOfItems}</span>
            </Badge>
            <ShoppingCart size={22} weight="fill" />
          </CartContainer>

          <OrderContainer onClick={() => navigate('/my-orders')}>
            <strong>Meus pedidos</strong>
            <User size={22} weight="fill" />
          </OrderContainer>
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
}
