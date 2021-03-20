import styled from 'styled-components';

const Search = styled.input`
  width: 400px;
  height: 30px;
  border-radius: 5px;

  @media (max-width: 500px) {
    width: 150px;
  }
`;

export default Search;
