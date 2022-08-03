import styled from 'styled-components';

export const InputContainer = styled.div`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['gray-300']};
  background: ${(props) => props.theme['gray-200']};
  transition: all 0.4s ease 0s;

  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    border: none;
    height: 100%;
    width: 100%;
    flex-grow: 1;
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-600']};
    padding: 0 0.75rem;
    background: none;
    outline: none;
    z-index: 1;

    &[type='number']::-webkit-inner-spin-button,
    &[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  span {
    position: absolute;
    color: ${(props) => props.theme['gray-500']};
    transform: translateY(-50%);
    font-size: 0.75rem;
    right: 0.75rem;
    top: 50%;
  }

  &:focus-within {
    outline: transparent;
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-800']};
  }
`;
