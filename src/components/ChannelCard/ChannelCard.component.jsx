import React from 'react';

import {
  Channel,
  Content,
  Description,
  Image,
  Text,
  Title,
  TitleBar,
} from './ChannelCard.styles';

function ChannelCard({ title, description, thumbnail }) {
  return (
    <Channel>
      <Content>
        <Image style={{ backgroundImage: `url(${thumbnail})` }} />
        <Text>
          <TitleBar>
            <Title>{title}</Title>
          </TitleBar>
          <Description>{description}</Description>
        </Text>
      </Content>
    </Channel>
  );
}

export default ChannelCard;
