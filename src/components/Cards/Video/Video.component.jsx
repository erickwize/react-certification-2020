import React from 'react';
import styled from 'styled-components';

import data from '../../../data/mock.json';

const Card = styled.div`
  overflow: hidden;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: #fff;
  width: 320px;
  height: 400px;
  margin: 10px;
`;

const CardContent = styled.button`
  width: 100%;
  display: block;
  text-align: inherit;
  color: inherit;
  border: 0;
  cursor: pointer;
  margin: 0;
  outline: 0;
  padding: 0;
  position: relative;
  align-items: center;
  user-select: none;
  border-radius: 0;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
`;

const CardImage = styled.img`
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.background});
  height: 180px;
`;
const CardText = styled.div`
  padding: 16px;
`;
const CardTitle = styled.h2`
  margin-bottom: 0.35em;
  font-size: 1.25rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0075em;
`;
const CardDescription = styled.p`
color: rgba(0, 0, 0, 0.54);
font-size: 0.875rem;
font-family: "Roboto", "Helvetica", "Arial", sans-serif;
font-weight: 400;
line-height: 1.43;
letter-spacing: 0.01071em;
text-overflow: ellipsis;
`

export const VideoCard = () => {
  console.log(data);
  return data.items.map((item) => {
    return (
      <Card>
        <CardContent>
          <CardImage src={item.snippet.thumbnails.medium.url} />
          <CardText>
            <CardTitle>{item.snippet.title}</CardTitle>
            <CardDescription>{item.snippet.description}</CardDescription>
          </CardText>
        </CardContent>
      </Card>
    );
  });
};
