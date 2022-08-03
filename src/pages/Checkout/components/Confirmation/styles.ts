import styled from 'styled-components';

export const ConfirmationContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.125rem;

      &.price {
        font-size: 1rem;
      }
    }

    strong {
      font-size: 1.25rem;
      line-height: 1.625rem;
      color: ${(props) => props.theme['gray-700']};
    }
  }

  > button {
    border: none;
    cursor: pointer;
    border-radius: 6px;
    margin-top: 0.65rem;
    padding: 0.75rem 2.8rem;
    background: ${(props) => props.theme['yellow-500']};
    transition: all 0.4s ease 0s;
    text-transform: uppercase;
    line-height: 1.375rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme['white']};
    font-weight: 700;

    &:not(:disabled) {
      &:hover {
        background: ${(props) => props.theme['yellow-800']};
      }
    }

    &:disabled {
      opacity: 0.8;
      cursor: not-allowed;
    }
  }
`;

export const ErrorMessage = styled.span`
  font-size: 0.875rem;
  max-width: 500px;
  line-height: 20px;
  color: ${(props) => props.theme['yellow-800']};
`;
