import React from 'react';
import styled from 'styled-components';
import { videos } from '../../data/videos';
import { Card } from './Card.Component';

function HomeCard() {
  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto auto;
    grid-gap: 5px;
  `;

  const Item = styled.div`
    display: flex;
    justify-content: center;
    padding: 0.5rem;
  `;

 const Element = styled.div`
    display: flex;
    justify-content: center;
    align-content:center;
    height: 50vh;
  `;

  return (
    <Element>
      <Grid>
        {videos[0].items.map((item) => (
          <Item className="ItemComponent" key={item.id.id}>
            <Card classes="mr" className="CardComponent">
              <Card.Image
                src={item.snippet.thumbnails.medium.url}
                alt={item.snippet.title}
              />
              <Card.Body>
                <Card.Title>{item.snippet.title}</Card.Title>
                <Card.Text>{item.snippet.description}</Card.Text>
              </Card.Body>
            </Card>
          </Item>
        ))}
      </Grid>
    </Element>
  );
}

export default HomeCard;
