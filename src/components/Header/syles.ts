import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-50']};
  position: sticky;
  z-index: 2;
  top: 0;
`;

export const HeaderContent = styled.div`
  max-width: 1152px;
  padding: 2rem 1rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['purple-300']};
  border-radius: 6px;
  padding: 0.5rem;
  gap: 0.25rem;

  > svg {
    color: ${(props) => props.theme['purple-500']};
  }

  > span {
    font-size: 0.875rem;
    line-height: 1.15rem;
    color: ${(props) => props.theme['purple-800']};
  }
`;

export const BaseButton = styled.button`
  padding: 0.5rem;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  position: relative;
  line-height: 0;

  > strong {
    width: 1px;
    height: 1px;
    position: absolute;
    clip: rect(0, 0, 0, 0);
    overflow: hidden;
    padding: 0;
    border: 0;
  }
`;

export const CartContainer = styled(BaseButton)`
  background-color: ${(props) => props.theme['yellow-300']};

  > svg {
    color: ${(props) => props.theme['yellow-800']};
  }
`;

export const OrderContainer = styled(BaseButton)`
  background-color: ${(props) => props.theme['yellow-300']};

  > svg {
    color: ${(props) => props.theme['yellow-800']};
  }
`;

export const Badge = styled.div`
  position: absolute;
  right: -0.5rem;
  top: -0.5rem;

  background-color: ${(props) => props.theme['yellow-800']};
  padding: 0.25rem 0.4rem;
  border-radius: 100%;

  > span {
    font-weight: bold;
    font-size: 0.75rem;
    color: ${(props) => props.theme['white']};
    line-height: 0.75rem;
  }
`;
