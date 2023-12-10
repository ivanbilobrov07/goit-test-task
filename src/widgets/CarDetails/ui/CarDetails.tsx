/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable consistent-return */
import axios from 'axios';
import { FC, useEffect, useState } from 'react';

import { ICar } from '@/app/types';
import { STATUS } from '@/constants';

import { DecorText } from '@/entities/CarItem';
import {
  ConditionsList,
  ConsitionsItem,
  Description,
  FirstCharacteristics,
  ImageThumb,
  Info,
  RentButton,
  SecondCharacteristics,
  ThirdCharacteristics,
  Title,
  Wrapper,
} from './CarDetals.styled';

interface ICarDetailsProps {
  id: string;
}

export const CarDetails: FC<ICarDetailsProps> = ({ id }) => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [data, setData] = useState<ICar | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const getCarById = async (carId: string) => {
      try {
        setStatus(STATUS.PENDING);
        const response = await axios.get(`/cars/${carId}`, { signal });

        setData(response.data);
        setStatus(STATUS.FULFILLED);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }

        setError('Some error happened');
        setStatus(STATUS.REJECTED);
      }
    };

    getCarById(id);

    return () => {
      controller.abort();
    };
  }, [id]);

  if (status === STATUS.PENDING || status === STATUS.IDLE) {
    return <Wrapper>Loading...</Wrapper>;
  }

  if (status === STATUS.REJECTED) {
    return <Wrapper>{error}</Wrapper>;
  }

  if (status === STATUS.FULFILLED) {
    const {
      img,
      make,
      model,
      year,
      address,
      type,
      fuelConsumption,
      engineSize,
      description,
      accessories,
      functionalities,
      rentalConditions,
    } = data as ICar;

    const addressArr = address.split(', ');

    const characteristicsData_1 = [
      addressArr[1],
      addressArr[2],
      `Id: ${id}`,
      `Year: ${year}`,
      `Type: ${type}`,
    ];
    const characteristicsData_2 = [
      `Fuel Consumption: ${fuelConsumption}`,
      `Engine Size: ${engineSize}`,
    ];

    return (
      <Wrapper>
        <ImageThumb>
          <img style={{ width: '100%' }} src={img} alt="" />
        </ImageThumb>
        <Title>
          {make} <DecorText>{model}</DecorText>, {year}
        </Title>

        <FirstCharacteristics data={characteristicsData_1} />
        <SecondCharacteristics data={characteristicsData_2} />

        <Description>{description}</Description>
        <Info>Accessories and functionalities:</Info>

        <FirstCharacteristics data={accessories} />
        <ThirdCharacteristics data={functionalities} />

        <Info>Rental Conditions: </Info>

        <ConditionsList>
          {rentalConditions.split('\n').map(item => (
            <ConsitionsItem key={item}>{item}</ConsitionsItem>
          ))}
        </ConditionsList>

        <RentButton href="phone:+380730000000">Rental car</RentButton>
      </Wrapper>
    );
  }
};
