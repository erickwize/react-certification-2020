import styled from 'styled-components';

export const Content = styled.div`
  display: block;
  padding: 0 20px;
`;
export const Footer = styled.div`
  display: block;
  padding: 0 20px;
`;
export const Section = styled.div`
  display: block;
`;
export const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  padding-left: 20px;
  color: ${(props) => props.theme.contrast || 'red'};
  transition: all 0.4s ease-in-out;
`;
export const Text = styled.div`
  font-size: 20px;
  padding: 50px;
  text-align: center;
  color: ${(props) => props.theme.text || 'red'};
  transition: all 0.4s ease-in-out;
`;
