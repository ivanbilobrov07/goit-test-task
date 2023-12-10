import styled from 'styled-components';

import { Characteristics } from '@/shared/Characteristics';

export const Wrapper = styled.div``;

export const ImageThumb = styled.div<{ $url: string }>`
  position: relative;
  width: 100%;
  height: 268px;
  margin-bottom: 14px;
  border-radius: 14px;
  background: ${props => `linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    url('${props.$url}'),
    lightgray 50% / cover no-repeat;`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin-bottom: 8px;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const Title = styled.h2<{ $ishidden: boolean }>`
  cursor: pointer;
  display: ${props => props.$ishidden && '-webkit-box'};
  overflow: ${props => props.$ishidden && 'hidden'};
  -webkit-box-orient: ${props => props.$ishidden && 'vertical'};
  -webkit-line-clamp: ${props => props.$ishidden && 1};
`;

export const DecorText = styled.span`
  color: ${props => props.theme.colors.accent};
`;

export const FirstCharacteristics = styled(Characteristics)`
  margin-bottom: 8px;
`;

export const SecondCharacteristics = styled(Characteristics)`
  margin-bottom: 28px;
`;
