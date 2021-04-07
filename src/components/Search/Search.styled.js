import styled from 'styled-components';

const SearchDiv = styled.div`
  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex: 2 1 100%;

  @media (max-width: 500px) {
    width: 150px;
  }
`;

const InputElement = styled.input`
  width: 60%;
  height: 30px;
  border-radius: 5px;
  margin-left: 10%;

  @media (max-width: 500px) {
    width: 200px;
  }
`;

export { SearchDiv, InputElement };
