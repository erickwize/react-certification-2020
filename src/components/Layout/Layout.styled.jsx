import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.background || 'red'};
  transition: all 0.4s ease-in-out;
  font-family: 'Open Sans';
`;
