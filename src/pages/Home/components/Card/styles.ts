import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['gray-100']};
  padding: 0 1.25rem 1.25rem;
  border-radius: 6px 36px;
  align-items: center;
  text-align: center;

  > img {
    margin-top: -1.25rem;
  }

  .title {
    font-weight: 700;
    font-size: 1.25rem;
    font-style: normal;
    line-height: 1.625rem;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme['gray-700']};
    font-family: 'Baloo 2', cursive;
  }

  .description {
    flex-grow: 1;
    font-size: 0.875rem;
    margin-bottom: 2rem;
    line-height: 1.125rem;
    color: ${(props) => props.theme['gray-500']};
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  justify-content: center;
  margin-top: 0.75rem;
  gap: 0.25rem;

  span {
    border-radius: 100px;
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    background-color: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme['yellow-800']};
    font-size: 0.625rem;
    font-weight: 700;
  }
`;

export const CardFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.375rem;
`;

export const FooterPrice = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.25rem;

  > span {
    font-size: 0.875rem;
    line-height: 1.125rem;
    color: ${(props) => props.theme['gray-600']};
  }

  > strong {
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 2rem;
    font-style: normal;
    color: ${(props) => props.theme['gray-700']};
    font-family: 'Baloo 2', cursive;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > button {
    border: 0;
    outline: none;
    cursor: pointer;
    transition: background 0.2s;
    background: ${(props) => props.theme['purple-800']};
    border-radius: 6px;
    padding: 0.5rem;
    line-height: 0;

    svg {
      color: ${(props) => props.theme['white']};
    }

    &:hover {
      background: ${(props) => props.theme['purple-500']};
    }
  }
`;
