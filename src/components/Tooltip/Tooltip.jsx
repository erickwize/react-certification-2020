import React, { useState } from 'react';

const Tooltip = ({ children }) => {
  const [show, setShow] = useState(false);

  const onMouseEnter = () => {
    setShow(true);
  };

  const onMouseLeave = () => {
    setShow(false);
  };

  const props = { onMouseEnter, onMouseLeave, show };

  return <>{children(props)}</>;
};

export default Tooltip;
