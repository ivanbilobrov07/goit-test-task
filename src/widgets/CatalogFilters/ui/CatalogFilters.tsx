/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { FormEvent, useMemo, useState } from 'react';
import { URLSearchParamsInit, useSearchParams } from 'react-router-dom';

import { carBrandsData, carPricesData } from '@/data';

import { CustomSelect } from '@/shared/CustomSelect';
import {
  AreaSelectWrapper,
  Button,
  InnerWrapper,
  LeftInput,
  OptionsForm,
  ResetButton,
  RightInput,
  TimeSelectWrapper,
} from './CatalogFilters.styled';
import { Text } from '@/shared/CustomSelect/CustomSelect.styled';

export const CatalogFilters = () => {
  const [searchParams, updateSearchParams] = useSearchParams();
  const [brand, setBrand] = useState(() => searchParams.get('brand') ?? null);
  const [price, setPrice] = useState(() => searchParams.get('price') ?? null);
  const [minMileage, setMinMileage] = useState(
    () => searchParams.get('minMileage') ?? ''
  );
  const [maxMileage, setMaxMileage] = useState(
    () => searchParams.get('maxMileage') ?? ''
  );

  const brandsData = useMemo(() => {
    return carBrandsData.map(el => ({ label: el, value: el.toLowerCase() }));
  }, []);

  const pricesData = useMemo(() => {
    return carPricesData.map(el => ({ label: el.toString(), value: el }));
  }, []);

  const validateMileage = () => {
    if (!minMileage && !maxMileage) {
      return true;
    }

    if (minMileage && !maxMileage) {
      if (+minMileage) {
        return true;
      }

      return false;
    }

    if (!minMileage && maxMileage) {
      if (+maxMileage) {
        return true;
      }

      return false;
    }

    if (+minMileage && +maxMileage) {
      if (+minMileage <= +maxMileage) {
        return true;
      }

      return false;
    }

    return false;
  };

  const resetFields = () => {
    setBrand(null);
    setPrice(null);
    setMinMileage('');
    setMaxMileage('');

    updateSearchParams({});
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateMileage()) {
      return;
    }

    const values: URLSearchParamsInit = {};

    if (brand) {
      values.brand = brand;
    }

    if (price) {
      values.price = price;
    }

    if (minMileage) {
      values.minMileage = minMileage;
    }

    if (maxMileage) {
      values.maxMileage = maxMileage;
    }

    updateSearchParams(values);
  };

  return (
    <OptionsForm onSubmit={onFormSubmit}>
      <InnerWrapper>
        <AreaSelectWrapper>
          <CustomSelect
            name="brand"
            label="Car brand"
            placeholder="Brand"
            selectFunction={setBrand}
            selectedOption={brand}
            data={brandsData}
            height={224}
          />
        </AreaSelectWrapper>
        <TimeSelectWrapper>
          <CustomSelect
            name="price"
            label="Max price/ 1 hour"
            placeholder="To $"
            selectFunction={setPrice}
            selectedOption={price ? +price : null}
            data={pricesData}
            height={128}
          />
        </TimeSelectWrapper>

        <div>
          <label>
            <Text>Сar mileage / km</Text>
            <LeftInput
              value={minMileage}
              onChange={e => setMinMileage(e.target.value.trim())}
              placeholder="From"
            />
          </label>
          <label>
            <RightInput
              value={maxMileage}
              onChange={e => setMaxMileage(e.target.value.trim())}
              placeholder="To"
            />
          </label>
        </div>

        <Button type="submit">Search</Button>
      </InnerWrapper>
      <ResetButton type="button" onClick={resetFields}>
        Reset filters
      </ResetButton>
    </OptionsForm>
  );
};
