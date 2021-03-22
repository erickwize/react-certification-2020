import React from 'react';

import { Channel, Content, Description, Image, Text, Title } from './ChannelCard.styles';

function ChannelCard({ title, description, thumbnail }) {
  return (
    <Channel>
      <Content>
        <Image style={{ backgroundImage: `url(${thumbnail})` }} />
        <Text>
          <p>
            <Title>{title}</Title>
          </p>
          <p>
            <Description>{description}</Description>
          </p>
        </Text>
      </Content>
    </Channel>
  );
}

export default ChannelCard;
