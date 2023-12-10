import axios from 'axios';
import { useEffect, useState } from 'react';

import { useAppSelector } from '@/app/hooks/reduxHooks';
import { ICar } from '@/app/types';
import { STATUS } from '@/constants';
import { selectFavorites } from '@/redux/selectors';

import { CatalogList } from '@/widgets/CatalogList';

const FavoritesPage = () => {
  const favoritesCarIds = useAppSelector(selectFavorites);
  const [favoritesCars, setFavoritesCars] = useState<ICar[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const getCars = async () => {
      try {
        setStatus(STATUS.PENDING);
        const response = await axios.get('/cars', { signal });

        setFavoritesCars(
          response.data.filter(car => favoritesCarIds.includes(car.id))
        );
        setStatus(STATUS.FULFILLED);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError('Something went wrong');
        }

        setStatus(STATUS.REJECTED);
      }
    };

    getCars();

    return () => {
      controller.abort();
    };
  }, [favoritesCarIds]);

  if (status === STATUS.REJECTED) {
    return <div>{error}</div>;
  }

  if (status === STATUS.FULFILLED && favoritesCars) {
    return (
      <section>
        <h1 style={{ marginBottom: '40px', textAlign: 'center' }}>
          Favorites cars
        </h1>
        <CatalogList data={favoritesCars} />
      </section>
    );
  }

  return <div>Loading...</div>;
};

export default FavoritesPage;
