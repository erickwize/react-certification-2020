import React from 'react';
import { Button, Icon, Label } from './FavoriteButton.styled';

const IconButton = ({ show, children, ...props }) => {
  return (
    <>
      <Button show={show} {...props}>
        <Icon
          title="FavoriteButton"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          focusable="false"
          container={props.container}
        >
          <path
            style={{ fill: '#F6C358' }}
            d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"
          />
        </Icon>
        <Label container={props.container}>{children}</Label>
      </Button>
    </>
  );
};

export default IconButton;
