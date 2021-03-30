import React from 'react';
import { SwitchInput, SwitchLabel, SwitchButton } from './ToggleSwitch.styles';

const ToggleSwitch = ({ id, toggled, onChange }) => {
  return (
    <>
      <SwitchInput id={id} type="checkbox" checked={toggled} onChange={onChange} />
      <SwitchLabel htmlFor={id}>
        <SwitchButton />
      </SwitchLabel>
    </>
  );
};

export default ToggleSwitch;
