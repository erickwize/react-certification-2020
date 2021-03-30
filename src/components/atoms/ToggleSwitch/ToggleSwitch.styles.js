import styled from 'styled-components';

export const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

export const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: not-allowed;
  width: 40px;
  height: 20px;
  border-radius: 50px;
  border: 1px solid #6c56a3;
  position: relative;
  transition: background-color 0.2s;
`;

export const SwitchButton = styled.span`
  content: '';
  position: absolute;
  top: 1x;
  left: 1px;
  width: 18px;
  height: 18px;
  border-radius: 22.5px;
  transition: 0.2s;
  background: #6c56a3;
  box-shadow: 0 0 1px 0 rgba(10, 10, 10, 0.29);
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 1px);
    transform: translateX(-100%);
  }

  ${SwitchLabel}:active & {
    width: 22.5px;
  }
`;
