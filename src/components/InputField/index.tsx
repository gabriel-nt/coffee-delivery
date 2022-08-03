import { InputHTMLAttributes } from 'react';
import { InputContainer } from './style';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  info?: string;
  register?: any;
}

export function InputField({ info, register, ...rest }: InputFieldProps) {
  return (
    <InputContainer>
      <input {...rest} {...register} />

      {info && <span>{info}</span>}
    </InputContainer>
  );
}
