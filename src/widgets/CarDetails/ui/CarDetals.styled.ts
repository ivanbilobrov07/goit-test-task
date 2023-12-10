import styled from 'styled-components';

import { Characteristics } from '@/shared/Characteristics';

export const Wrapper = styled.div`
  min-height: 400px;
`;

export const ImageThumb = styled.div`
  margin-bottom: 14px;
  border-radius: 14px;
  overflow: hidden;
`;

export const Title = styled.h2`
  margin-bottom: 8px;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;

export const FirstCharacteristics = styled(Characteristics)`
  margin-bottom: 4px;
`;

export const SecondCharacteristics = styled(Characteristics)`
  margin-bottom: 14px;
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 1.43;
`;

export const Description = styled(Text)`
  margin-bottom: 24px;
`;

export const Info = styled(Text)`
  margin-bottom: 8px;
`;

export const ThirdCharacteristics = styled(Characteristics)`
  margin-bottom: 24px;
`;

export const ConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const ConsitionsItem = styled.ul`
  padding: 7px 14px;

  border-radius: 35px;
  background: #f9f9f9;
  color: #363535;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.24px;
`;

export const RentButton = styled.a`
  display: inline-block;
  padding: 12px 50px;

  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  border-radius: 12px;
  background: #3470ff;
`;
