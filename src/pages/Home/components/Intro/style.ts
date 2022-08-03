import styled from 'styled-components';

import backgroundImg from '../../../../assets/home-background.png';

export const IntroContainer = styled.section`
  position: relative;

  &::before {
    content: '';
    height: 100%;
    position: absolute;
    background-image: url(${backgroundImg});
    background-size: cover;
    width: 100%;

    -webkit-filter: blur(2rem);
    -moz-filter: blur(2rem);
    -ms-filter: blur(2rem);
    -o-filter: blur(2rem);
    filter: blur(2rem);
  }
`;

export const IntroContent = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1152px;
  padding: 5.75rem 1rem;
  gap: 3.75rem;

  @media (max-width: 1140px) {
    gap: 2rem;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;

    img {
      width: 100%;
      height: auto;
      max-width: 480px;
    }
  }
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 3rem;
    font-weight: 800;
    font-style: normal;
    line-height: 3.875rem;
    color: ${(props) => props.theme['gray-900']};
    font-family: 'Baloo 2', cursive;
  }

  p {
    margin-top: 1rem;
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: ${(props) => props.theme['gray-700']};
  }
`;

export const Highlights = styled.div`
  display: grid;
  padding-top: 2rem;
  grid-template-columns: 14.5rem 1fr;
  padding-bottom: 1.1rem;
  column-gap: 2.5rem;
  row-gap: 1.25rem;

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
