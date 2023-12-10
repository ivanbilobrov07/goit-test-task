import styled from 'styled-components';

export const OptionsForm = styled.form`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InnerWrapper = styled.div`
  gap: 18px;
  align-items: flex-end;
  display: flex;
`;

export const TimeSelectWrapper = styled.label`
  & .custom-select-wrapper {
    width: 125px;
  }
`;

export const AreaSelectWrapper = styled.label`
  & .custom-select-wrapper {
    width: 224px;
  }
`;

export const IngredientsSelectWrapper = styled.label`
  & .custom-select-wrapper {
    width: 188px;
  }
`;

const Input = styled.input`
  padding: 14px 24px;
  border: none;
  width: 160px;
  background: #f7f7fb;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  &::placeholder {
    color: #121417;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
  }
`;

export const LeftInput = styled(Input)`
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
`;

export const RightInput = styled(Input)`
  border-radius: 0px 14px 14px 0px;
`;

export const Button = styled.button`
  height: 48px;
  padding: 14px 44px;
  border-radius: 12px;
  background: #3470ff;
  color: white;
`;

export const ResetButton = styled.button`
  align-self: start;
`;
