import styled from 'styled-components';

export const OuterWrapper = styled.span`
  display: block;
`;

export const Text = styled.span`
  display: block;
  margin-bottom: 8px;

  &::first-letter {
    text-transform: uppercase;
  }

  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
`;

export const SelectWrapper = styled.span`
  position: relative;
  cursor: pointer;

  & button {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 14px 18px;
    justify-content: space-between;
    align-items: center;

    border-radius: 14px;
    background: #f7f7fb;
    color: #121417;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
  }
`;

export const List = styled.ul<{ $height: number }>`
  position: absolute;
  z-index: 1;
  top: calc(100% + 4px);
  left: 0;
  height: ${props => props.$height}px;
  width: 100%;
  display: inline-flex;
  padding-top: 14px;
  padding-bottom: 10px;
  padding-left: 18px;
  flex-direction: column;
  gap: 8px;
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: #fff;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  overflow-y: scroll;

  & li {
    color: rgba(18, 20, 23, 0.2);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
  }
`;
