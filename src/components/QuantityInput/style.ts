import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['gray-300']};
  border-radius: 6px;
  gap: 0.25rem;

  &.large {
    padding: 0.565rem 0.5rem;
  }

  &.small {
    padding: 0.375rem 0.5rem;
  }

  input {
    border: 0;
    text-align: center;
    background: transparent;
    height: 1.25rem;
    width: 1.25rem;
    outline: none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }
  }

  button {
    border: 0;
    outline: none;
    background: transparent;
    cursor: pointer;
    line-height: 0;

    &:hover svg {
      color: ${(props) => props.theme['purple-800']};
    }

    &:disabled {
      & svg {
        color: ${(props) => props.theme['gray-500']};
      }
    }
  }

  svg {
    color: ${(props) => props.theme['purple-500']};
    transition: color 0.2s;
  }
`;
