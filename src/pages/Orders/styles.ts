import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const OrdersWrapper = styled.section`
  display: flex;
  max-width: 1152px;
  padding: 2.5rem 1rem;
  flex-direction: column;
  margin: 0 auto;
  gap: 2rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    .order + .order {
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 1px solid ${(props) => props.theme['gray-400']};
    }

    h1 {
      font-size: 2rem;
      font-weight: 800;
      line-height: 2.625rem;
      font-family: 'Baloo 2', cursive;
      color: ${(props) => props.theme['yellow-800']};
    }

    p {
      font-size: 1.25rem;
      line-height: 1.625rem;
    }
  }
`;

export const OrderInfo = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-top: 0.5rem;
  grid-template-columns: repeat(5, auto);

  span {
    font-size: 1.1rem;

    & + span {
      padding-left: 1.5rem;
      border-left: 2px solid ${(props) => props.theme['gray-500']};
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);

    span {
      border-left: none;

      & + span {
        border-left: 0px;
        padding-left: 0;
      }
    }
  }

  @media (min-width: 600px) and (max-width: 1124px) {
    grid-template-columns: repeat(2, 1fr);

    span {
      border-left: none;

      & + span {
        border-left: 0px;
        padding-left: 0;
      }
    }
  }
`;

export const OrderProducts = styled.div`
  margin-top: 1.5rem;

  > div {
    gap: 1.5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 1rem;
  }

  @media (max-width: 600px) {
    > div {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (min-width: 600px) and (max-width: 1124px) {
    > div {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export const OrderShipping = styled.div`
  display: block;
  margin-top: 1.5rem;
  border-radius: 8px;
`;

export const ButtonHome = styled(NavLink)`
  text-align: center;
  text-decoration: none;
  border-radius: 6px;
  margin-top: 0.65rem;
  padding: 0.85rem 2.8rem;
  background: ${(props) => props.theme['yellow-500']};
  transition: all 0.4s ease 0s;
  line-height: 1.575rem;
  font-size: 1em;
  color: ${(props) => props.theme['white']};
  font-weight: 700;
  max-width: 300px;

  &:not(:disabled) {
    &:hover {
      background: ${(props) => props.theme['yellow-800']};
    }
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;
