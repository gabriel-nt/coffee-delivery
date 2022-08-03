import styled from 'styled-components';

export const SuccessOrderWrapper = styled.section`
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
