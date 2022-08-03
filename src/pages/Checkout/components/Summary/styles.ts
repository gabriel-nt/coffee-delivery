import styled from 'styled-components';

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  gap: 0.75rem;

  h2 {
    font-weight: 700;
    font-style: normal;
    font-size: 1.125rem;
    line-height: 1.4375rem;
    color: ${(props) => props.theme['gray-700']};
    font-family: 'Baloo 2', cursive;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const SummaryContent = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px 44px;

  > div {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${(props) => props.theme['gray-300']};
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;
