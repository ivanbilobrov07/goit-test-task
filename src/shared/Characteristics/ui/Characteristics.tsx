/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import {
  CharacteristicItem,
  CharacteristicsList,
} from './Characteristics.styled';

interface ICharacteristicsProps {
  data: (string | number)[];
  className?: string;
}

export const Characteristics: FC<ICharacteristicsProps> = ({
  data,
  className,
}) => {
  return (
    <CharacteristicsList className={className}>
      {data.map((item, i) => (
        <CharacteristicItem key={i}>{item}</CharacteristicItem>
      ))}
    </CharacteristicsList>
  );
};
