import styled from 'styled-components';

export const StoreContainer = styled.section`
  margin: 0 auto;
  padding: 2rem 1rem;
  max-width: 1152px;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    font-style: normal;
    line-height: 2.625rem;
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['gray-700']};
  }
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 3.375rem;
  gap: 2.5rem 2rem;

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 600px) and (max-width: 812px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 812px) and (max-width: 1140px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
