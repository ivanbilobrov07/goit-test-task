/* eslint-disable @typescript-eslint/no-unused-expressions */
import { FC, useState } from 'react';

import { ICar } from '@/app/types';

import {
  DecorText,
  FirstCharacteristics,
  ImageThumb,
  InfoHeader,
  SecondCharacteristics,
  Title,
  Wrapper,
} from './CarItem.styled';

interface ICarItemProps {
  data: ICar;
  carDetailsButtonSlot: React.ReactElement;
  favoriteButtonSlot: React.ReactElement;
}

export const CarItem: FC<ICarItemProps> = ({
  data,
  carDetailsButtonSlot,
  favoriteButtonSlot,
}) => {
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    description,
    type,
    mileage,
    accessories,
    functionalities,
  } = data;

  const [isTitleShown, setIsTitleShown] = useState(false);
  const addressArr = address.split(', ');
  const smallestLengthaCharacteristic = [
    ...accessories,
    ...functionalities,
  ].reduce((prev, cur) => {
    if (cur.length < prev.length) {
      return cur;
    }

    return prev;
  }, accessories[0]);
  const firstCharacteristicData = [addressArr[1], addressArr[2], rentalCompany];
  const secondCharacteristicData = [
    type,
    mileage,
    smallestLengthaCharacteristic,
  ];

  const toggleVisibleTitle = e => {
    e.stopPropagation();
    setIsTitleShown(s => !s);
  };

  description.includes('premium') && firstCharacteristicData.push('Premium');

  return (
    <Wrapper>
      <ImageThumb $url={img}>{favoriteButtonSlot}</ImageThumb>
      <InfoHeader>
        <Title onClick={toggleVisibleTitle} $ishidden={!isTitleShown}>
          {make} <DecorText>{model}</DecorText>, {year}
        </Title>
        <span>{rentalPrice}</span>
      </InfoHeader>

      <FirstCharacteristics data={firstCharacteristicData} />
      <SecondCharacteristics data={secondCharacteristicData} />

      {carDetailsButtonSlot}
    </Wrapper>
  );
};
