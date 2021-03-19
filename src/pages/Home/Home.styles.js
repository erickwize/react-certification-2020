import styled from 'styled-components'

export const VideoList = styled.section `
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin: 50px auto;
max-width: 800px;

@media screen and (min-width: 1025px) {
  max-width: 1200px;
}

@media screen and (max-width: 750px) {
  justify-content: center;
}
`;

export const HomeTitle = styled.h1 `
margin: 30px;
display: block;
text-align: center;
font-size: 50px;
letter-spacing: -2px;

@media screen and (max-width: 750px) {
  font-size: 30px;
  margin: 15px;
}
`;
