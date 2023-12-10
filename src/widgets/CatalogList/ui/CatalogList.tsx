/* eslint-disable react/require-default-props */
import { FC } from 'react';

import { ICar } from '@/app/types';

import { CarDetails } from '@/widgets/CarDetails';
import { CarDetailsButton } from '@/features/CarDetailsButton';
import { FavoritesButton } from '@/features/FavoritesButton';
import { CarItem } from '@/entities/CarItem';
import { StyledItem, StyledList } from './CatalogList.styled';

interface ICatalogListProps {
  data: ICar[];
  style?: React.CSSProperties;
}

export const CatalogList: FC<ICatalogListProps> = ({ data, style }) => {
  if (data.length) {
    return (
      <StyledList style={style}>
        {data.map(car => (
          <StyledItem key={car.id}>
            <CarItem
              data={car}
              carDetailsButtonSlot={
                <CarDetailsButton carDetailsSlot={<CarDetails id={car.id} />} />
              }
              favoriteButtonSlot={<FavoritesButton id={car.id} />}
            />
          </StyledItem>
        ))}
      </StyledList>
    );
  }

  return <div>Cannot find any items</div>;
};
