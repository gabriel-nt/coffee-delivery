import styled from 'styled-components';

export const InformationContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6.375rem;

  > div {
    display: flex;
    padding: 2.5rem;
    position: relative;
    background: ${(props) => props.theme.white};
    border-radius: 6px 36px;
    flex-direction: column;
    flex-grow: 1;
    gap: 2rem;

    &::before {
      content: '';
      z-index: -1;
      background: linear-gradient(
        102.89deg,
        rgb(219, 172, 44) 2.61%,
        rgb(128, 71, 248) 98.76%
      );
      border-radius: 7px 37px;
      position: absolute;
      inset: -1px;
    }
  }

  > img {
    max-width: 100%;
  }

  @media (max-width: 1024px) {
    gap: 2.375rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
