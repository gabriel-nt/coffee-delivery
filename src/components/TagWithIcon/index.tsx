import { ReactNode } from 'react';
import { Container } from './style';

interface TagWithIconProps {
  icon: ReactNode;
  iconBg: string;
  text: string | ReactNode;
}

export function TagWithIcon({ icon, iconBg, text }: TagWithIconProps) {
  return (
    <Container>
      <div style={{ backgroundColor: iconBg }}>{icon}</div>
      <span>{text}</span>
    </Container>
  );
}
