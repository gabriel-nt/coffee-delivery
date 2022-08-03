import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import React from 'react';

import homeImg from '../../../../assets/home-img.svg';
import { TagWithIcon } from '../../../../components/TagWithIcon';
import { IntroContainer, IntroContent, Info, Highlights } from './style';

export function Intro() {
  const highlights = [
    {
      id: 1,
      iconBg: '#C47F17',
      text: 'Compra simples e segura',
      icon: <ShoppingCart size={16} weight="fill" />,
    },
    {
      id: 2,
      iconBg: '#574F4D',
      text: 'Embalagem mantém o café intacto',
      icon: <Package size={16} weight="fill" />,
    },
    {
      id: 3,
      iconBg: '#DBAC2C',
      text: 'Entrega rápida e rastreada',
      icon: <Timer size={16} weight="fill" />,
    },
    {
      id: 4,
      iconBg: '#8047F8',
      text: 'O café chega fresquinho até você',
      icon: <Coffee size={16} weight="fill" />,
    },
  ];

  return (
    <IntroContainer>
      <IntroContent>
        <Info>
          <div>
            <h2>Encontre o café perfeito para qualquer hora do dia</h2>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>

          <Highlights>
            {highlights.map((item) => (
              <TagWithIcon
                key={item.id}
                icon={item.icon}
                iconBg={item.iconBg}
                text={item.text}
              />
            ))}
          </Highlights>
        </Info>

        <img
          src={homeImg}
          alt="Imagem de um copo de café com o nome da logomarca rodeado por grãos de café"
        />
      </IntroContent>
    </IntroContainer>
  );
}
