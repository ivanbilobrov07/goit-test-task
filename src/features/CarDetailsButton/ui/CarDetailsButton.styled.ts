import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 44px;

  border-radius: 12px;
  background: ${props => props.theme.colors.accent};
  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 541px;
  padding: 40px;

  border-radius: 24px;
  background: #fff;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
`;
