import styled from 'styled-components';

export const PaymentContainer = styled.section`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const PaymentDescription = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  .title {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    h3 {
      font-weight: 400;
      color: ${(props) => props.theme['gray-700']};
      line-height: 1.3125rem;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.3125rem;
    }
  }
`;

export const PaymentContent = styled.div`
  display: flex;
  gap: 0.75rem;

  > div {
    width: calc(100% / 3);
  }

  @media (max-width: 768px) {
    flex-direction: column;

    > div {
      width: 100%;
    }
  }
`;
