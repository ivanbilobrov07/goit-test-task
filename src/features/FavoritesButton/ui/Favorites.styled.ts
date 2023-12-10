import styled from 'styled-components';

export const FavButton = styled.button<{ $isFavorite: boolean }>`
  color: ${props => (props.$isFavorite ? props.theme.colors.accent : 'white')};
  position: absolute;
  top: 14px;
  right: 14px;

  & svg {
    fill: ${props => (props.$isFavorite ? props.theme.colors.accent : 'none')};
  }
`;
