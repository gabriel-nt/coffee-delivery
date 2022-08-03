import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  width: 100%;
  padding: 0.5rem 0.25rem;
  display: flex;
  gap: 1.25rem;
  max-width: 550px;

  padding: 1.25rem 1.25rem;
  padding-bottom: 0.65rem;
  border-radius: 6px 36px;
  background: ${(props) => props.theme['gray-100']};

  > img {
    width: 4rem;
    height: 4rem;
  }
`;

export const ProductCardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 0.5rem;
`;

export const ProductCardHeader = styled.header`
  display: flex;
  justify-content: space-between;

  > span {
    color: rgb(64, 57, 55);
    font-size: 1rem;
    line-height: 1.3125rem;
    font-weight: 400;
  }
`;

export const ProductCardFooter = styled.footer`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  & > span:first-of-type {
    flex-grow: 1;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    line-height: 1.125rem;
    color: ${(props) => props.theme['gray-500']};
  }
`;
