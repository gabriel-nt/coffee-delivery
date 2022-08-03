import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    line-height: 0;
    padding: 0.5rem;
    border-radius: 100%;
  }

  svg {
    color: ${(props) => props.theme.white};
  }

  span {
    color: ${(props) => props.theme['gray-600']};
  }
`;
