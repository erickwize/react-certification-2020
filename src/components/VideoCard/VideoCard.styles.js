import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 8px;
  cursor: pointer;
  background-color: #fff;
  overflow: hidden;
  opacity: 1;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%),
    0px 1px 10px 0px rgb(0 0 0 / 12%);

  text-align: left;
`;

export const Image = styled.div`
  background-image: url(${(props) => props.image});
  display: block;
  height: ${(props) => (props.height ? props.height : 180)}px;
  background-repeat: no-repeat;
  background-size: cover;
  :hover {
    opacity: 0.5;
  }
`;

export const Title = styled.h3`
  color: black;
  font-size: 1.25rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  margin: 0;
  padding: 10px;
`;

export const Description = styled.p`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  text-align: left;
  padding: 10px;
`;
