import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
`;
const Avatar = styled.div`
  display: block;
  height: 40px;
  width: 40px;
  border-radius: 100px;
  background-color: #409287;
  box-shadow: 0 0 10px #ffffff;
  cursor: pointer;
  &.logged {
    &:after {
      content: '🧑🏻';
      font-size: 35px;
      border-radius: 100px;
      text-align: center;
      width: 100%;
      display: block;
    }
  }
  &.notlogged {
    &:after {
      content: '👤';
      font-size: 35px;
      border-radius: 100px;
      text-align: center;
      width: 100%;
      display: block;
    }
  }
`;

export { Wrapper, Avatar };
