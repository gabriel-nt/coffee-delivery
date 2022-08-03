import styled from 'styled-components';

export const PaymentInputContainer = styled.div`
  input {
    appearance: none;
    position: absolute;
    transform: translateY(-50%);
    visibility: hidden;
    top: 50%;

    &:checked {
      ~ label div {
        background: ${(props) => props.theme['purple-300']};
        border-color: ${(props) => props.theme['purple-500']};
      }
    }
  }
`;

export const PaymentInputContent = styled.div`
  display: flex;
  cursor: pointer;
  user-select: none;
  border-radius: 6px;
  padding: 0.9375rem 1rem;
  background: ${(props) => props.theme['gray-300']};
  border: 1px solid ${(props) => props.theme['gray-300']};
  transition: all 0.4s ease 0s;
  text-transform: uppercase;
  color: ${(props) => props.theme['gray-600']};
  align-items: center;
  font-size: 0.75rem;
  gap: 0.75rem;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  &:hover {
    background: ${(props) => props.theme['gray-400']};
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
    padding: 0.5rem;
    justify-content: center;
  }
`;
