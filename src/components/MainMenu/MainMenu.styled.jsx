import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-block;
  margin: 8px 10px 0 0;
`;
export const HamButton = styled.div`
  display: block;
`;
export const HamLine = styled.div`
  display: block;
  width: 30px;
  height: 4px;
  margin-bottom: 5px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.primary_shadow || 'red'};
  transition: all 0.4s ease-in-out;
`;
