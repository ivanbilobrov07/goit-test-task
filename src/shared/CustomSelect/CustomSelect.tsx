/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { FC, MouseEvent, useEffect, useState } from 'react';

import {
  List,
  OuterWrapper,
  SelectWrapper,
  Text,
} from './CustomSelect.styled.ts';

import iconsSprite from '../../../assets/sprite.svg';

interface IData {
  label: string;
  value: number | string;
}

interface ICustomSelectProps {
  name: string;
  data: IData[];
  label: string;
  selectFunction: any;
  selectedOption: number | string | null;
  height: number;
  placeholder: string;
}

export const CustomSelect: FC<ICustomSelectProps> = ({
  name,
  data,
  selectFunction,
  selectedOption,
  height,
  placeholder,
  label,
}) => {
  const [isSelectShown, setIsSelectShown] = useState(false);

  useEffect(() => {
    const hideSelect = ({ target }) => {
      if (target.closest(`#custom-select-${name}`)) {
        return;
      }
      console.log(1);
      setIsSelectShown(false);
    };

    window.addEventListener('click', hideSelect);

    return () => {
      window.removeEventListener('click', hideSelect);
    };
  }, [name]);

  const handleSelect = (e: MouseEvent, value: string | number) => {
    e.stopPropagation();
    selectFunction(value);
  };

  return (
    <OuterWrapper
      className="custom-select-wrapper"
      id={`custom-select-${name}`}
    >
      <select name={name} hidden />
      <Text>{label}</Text>
      <SelectWrapper>
        <button type="button" onClick={() => setIsSelectShown(s => !s)}>
          <span>
            {data.find(el => el.value === selectedOption)?.label || placeholder}
          </span>
          <svg
            width={20}
            height={20}
            style={isSelectShown ? { transform: 'rotate(180deg)' } : {}}
          >
            <use href={`${iconsSprite}#icon-chevron`}></use>
          </svg>
        </button>

        {isSelectShown && (
          <List $height={height}>
            {data.map(el => (
              <li key={el.value} onClick={e => handleSelect(e, el.value)}>
                {el.label}
              </li>
            ))}
          </List>
        )}
      </SelectWrapper>
    </OuterWrapper>
  );
};
