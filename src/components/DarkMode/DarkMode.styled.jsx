import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  padding: 0 20px;
  height: 40px;
`;
const Switch = styled.div`
  display: inline-block;
  position: relative;
  margin: 0 20px;
`;
const Track = styled.div`
  display: block;
  width: 50px;
  height: 25px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.background || 'red'};
  transition: all 0.4s ease-in-out;
`;
const Ball = styled.div`
  display: block;
  width: 20px;
  height: 20px;
  background-color: #409287;
  border-radius: 100px;
  position: absolute;
  z-index: 1;
  top: calc(50% - 10px);
  left: 5px;
  transition: all 0.4s ease-in-out;
  &.light {
    background-color: #222222;
  }
  &.dark {
    background-color: #dddddd;
    left: calc(100% - 25px);
  }
`;

export { Wrapper };
export { Switch };
export { Track };
export { Ball };
