import { Minus, Plus } from 'phosphor-react';
import { useState, useEffect, useMemo } from 'react';
import { Container } from './style';

interface QuantityInputProps {
  value?: number;
  size?: 'large' | 'small';
  onChangeValue: (newValue: number) => void;
}

export function QuantityInput({
  value = 1,
  onChangeValue,
  size = 'large',
}: QuantityInputProps) {
  const [newValue, setNewValue] = useState(1);

  useEffect(() => {
    setNewValue(value);
  }, []);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewValue(Number(e.target.value));
    onChangeValue(Number(e.target.value));
  };

  const handleIncrementValue = () => {
    setNewValue((prevState) => {
      const tempValue = prevState + 1;

      onChangeValue(tempValue);

      return tempValue;
    });
  };

  const handleDecrementValue = () => {
    setNewValue((prevState) => {
      const tempValue = prevState - 1;

      onChangeValue(tempValue);

      return tempValue;
    });
  };

  const decreaseButtonDisabled = useMemo(() => newValue === 1, [newValue]);

  return (
    <Container className={size}>
      <button onClick={handleDecrementValue} disabled={decreaseButtonDisabled}>
        <Minus size={14} weight="fill" />
      </button>
      <input
        type="number"
        value={newValue}
        step={1}
        onChange={(e) => handleChangeInput(e)}
      />
      <button onClick={handleIncrementValue}>
        <Plus size={14} weight="fill" />
      </button>
    </Container>
  );
}
