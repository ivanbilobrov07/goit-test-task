import styled from 'styled-components';

export const CharacteristicsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0 12px;
  align-items: center;

  color: ${props => props.theme.colors.secondary};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
`;

export const CharacteristicItem = styled.li`
  position: relative;

  &:not(:last-child) {
    &::after {
      content: '';
      top: 1px;
      right: -6.5px;
      position: absolute;
      display: block;
      height: 100%;
      width: 1px;
      background-color: rgba(18, 20, 23, 0.1);
    }
  }
`;
