import styled from 'styled-components';

export const Content = styled.div`
  display: block;
  padding: 0 20px;
  color: ${(props) => props.theme.text || 'red'};
`;
export const Footer = styled.div`
  display: block;
  padding: 0 20px;
`;
export const Section = styled.section`
  display: block;
  width: 100%;
`;
export const Title = styled.div`
  display: block;
  width: 100%;
  text-align: left;
  font-size: 35px;
  font-weight: bold;
  padding-left: 20px;
  color: ${(props) => props.theme.contrast || 'red'};
`;
export const Emoji = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 60px;
`;
export const Button = styled.a`
  display: inline-block;
  background-color: ${(props) => props.theme.contrast || 'red'};
  color: ${(props) => props.theme.background || 'red'};
  transition: all 0.4s ease-in-out;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 3px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.dark || 'red'};
    color: ${(props) => props.theme.light || 'red'};
  }
`;
