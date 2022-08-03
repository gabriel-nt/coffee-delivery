import styled from 'styled-components';

export const AddressContainer = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const AddressDescription = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['yellow-800']};
  }

  .title {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    h3 {
      font-weight: 400;
      color: ${(props) => props.theme['gray-700']};
      line-height: 1.3125rem;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.3125rem;
    }
  }
`;

export const AddressForm = styled.form`
  width: 100%;
  display: grid;
  gap: 1rem 0.75rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 3.75rem;
  }
`;

export const AddressField = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 0.3rem;

  label {
    padding-bottom: 0.3rem;
    font-size: 0.875rem;
  }

  &[data-field='cep'] {
    grid-column-start: span 3;
    max-width: 12.5rem;
  }

  &[data-field='street'] {
    grid-column-start: span 3;
  }

  &[data-field='complement'] {
    grid-column-start: span 2;
  }

  @media (max-width: 480px) {
    &[data-field='cep'] {
      max-width: 100%;
    }

    &[data-field='number'] {
      grid-column-start: span 1;
    }

    &[data-field='neighborhood'] {
      grid-column-start: span 3;
    }

    &[data-field='city'] {
      grid-column-start: span 2;
    }
  }
`;
