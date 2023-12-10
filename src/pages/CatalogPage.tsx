import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { STATUS } from '@/constants';
import { ICar } from '@/app/types';

import { CatalogList } from '@/widgets/CatalogList';
import { CatalogFilters } from '@/widgets/CatalogFilters';

const getFilteredCars = (
  cars: ICar[],
  brand,
  price,
  minMileage,
  maxMileage
) => {
  let result = cars;

  if (brand) {
    result = result.filter(car => car.make.toLowerCase() === brand);
  }

  if (price) {
    result = result.filter(car => +car.rentalPrice.slice(1) <= +price);
  }

  if (minMileage) {
    result = result.filter(car => car.mileage >= +minMileage);
  }

  if (maxMileage) {
    result = result.filter(car => car.mileage <= +maxMileage);
  }

  return result;
};

const CatalogPage = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState(STATUS.IDLE);
  const [cars, setCars] = useState<ICar[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [limitCars, setLimitCars] = useState(false);

  const brand = searchParams.get('brand') ?? null;
  const price = searchParams.get('price') ?? null;
  const minMileage = searchParams.get('minMileage') ?? null;
  const maxMileage = searchParams.get('maxMileage') ?? null;

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const getCars = async (p: number) => {
      try {
        setStatus(STATUS.PENDING);
        const response = await axios.get(`/cars?page=${p}&limit=12`, {
          signal,
        });

        if (response.data.length < 12) {
          setLimitCars(true);
        }
        setCars(s => [...s, ...response.data]);
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

    getCars(page);

    return () => {
      controller.abort();
    };
  }, [page]);

  const onLoadMoreClick = () => {
    setPage(s => s + 1);
  };

  if (status === STATUS.REJECTED) {
    return <div>{error}</div>;
  }

  if (page === 1 && status === STATUS.PENDING) {
    return <div>Loading...</div>;
  }

  const filteredCars = getFilteredCars(
    cars,
    brand,
    price,
    minMileage,
    maxMileage
  );

  return (
    <section>
      <h1 hidden>Find your perfect car</h1>
      <CatalogFilters />
      <CatalogList data={filteredCars} style={{ marginBottom: '100px' }} />
      {!limitCars && (
        <div style={{ textAlign: 'center' }}>
          {status === STATUS.PENDING ? (
            <div>Loading...</div>
          ) : (
            <button
              style={{
                marginBottom: '50px',
                color: '#3470FF',
              }}
              type="button"
              onClick={onLoadMoreClick}
            >
              Load more
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default CatalogPage;
