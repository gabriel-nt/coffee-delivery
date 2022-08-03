import styled from 'styled-components';

export const CheckoutWrapper = styled.section`
  margin: 0 auto;
  max-width: 1152px;
  padding: 2.5rem 1rem;
  display: flex;
  gap: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;

    .content {
      width: 100%;
    }
  }
`;

export const CheckoutContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  gap: 0.75rem;

  h2 {
    font-weight: 700;
    font-style: normal;
    font-size: 1.125rem;
    line-height: 1.4375rem;
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['gray-700']};
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
