import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px 20px;
  background-color: #70dbcd;
  height: 70px;
  box-shadow: 0 0 10px #409287;
  margin-bottom: 20px;
`;
const Left = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Right = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { HeaderWrapper, Left, Right };
