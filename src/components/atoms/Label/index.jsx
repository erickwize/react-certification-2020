import React from 'react';
import styled from 'styled-components';

const LabelSC = styled.label`
  color: white;
  margin: 0px 15px;
`;

const Label = (props) => <LabelSC data-testid="labelTest">{props.children}</LabelSC>;

export default Label;
