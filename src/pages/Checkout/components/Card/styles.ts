import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  padding: 0.5rem 0.25rem;
  display: flex;
  gap: 1.25rem;

  > img {
    width: 4rem;
    height: 4rem;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 0.5rem;
`;

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;

  > span {
    color: rgb(64, 57, 55);
    font-size: 1rem;
    line-height: 1.3125rem;
    font-weight: 400;
  }
`;

export const CardFooter = styled.footer`
  display: flex;
  gap: 0.5rem;

  > button {
    border: 0;
    outline: none;
    display: flex;
    cursor: pointer;
    transition: all 0.4s ease 0s;
    background-color: ${(props) => props.theme['gray-300']};
    align-items: center;
    border-radius: 6px;
    padding: 0.5rem;
    gap: 0.25rem;

    svg {
      color: ${(props) => props.theme['purple-500']};
    }

    span {
      font-size: 0.75rem;
      text-transform: uppercase;
    }

    &:hover {
      background: ${(props) => props.theme['gray-400']};
    }
  }
`;
