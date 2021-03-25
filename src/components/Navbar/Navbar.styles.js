import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background-color: rgb(173, 34, 34);
  display: flex;
  height: 55px;
  justify-content: space-between;
  padding: 10px 20px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const Left = styled.div`
  text-align: left;
  flex: 1;
`;

export const Center = styled.div`
  text-align: center;
  flex: 1;
`;

export const Right = styled.div`
  text-align: right;
  flex: 1;
`;

export const Logo = styled.img`
  height: 40px;
  margin-right: 25px;
`;

export const SearchInput = styled.input`
  background-color: #eee;
  border-radius: 25px;
  border: 0px;
  line-height: 1.5em;
  height: 30px;
  width: 100%;
  padding: 4px 10px;
  transition: 200ms;
  &:focus {
    background-color: #fff;
    outline: none;
    height: 35px;
  }
`;

export const Icon = styled.i`
  margin: 4px 2px;
  border-radius: 15px;
  padding: 4px 10px;
  color: rgb(243, 142, 124);
  transition: 200ms;
  &:hover {
    cursor: pointer;
    color: rgb(219, 83, 59);
    font-size: 1.35em;
  }
`;

export const Active = styled(Icon)`
  cursor: pointer;
  color: rgb(252, 212, 212);
  font-size: 1.35em;
`;
