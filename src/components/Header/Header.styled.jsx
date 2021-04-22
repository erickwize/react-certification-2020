import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px 20px;
  height: 70px;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.primary || 'red'};
  box-shadow: 0 0 10px ${(props) => props.theme.primary_shadow || 'red'};
  transition: all 0.4s ease-in-out;
`;
const Left = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Right = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Favorite = styled.div`
  display: inline-block;
  font-size: 30px;
  text-align: center;
  padding: 5px;
  transform: translateY(-10px);
`;

export { HeaderWrapper, Left, Right, Favorite };
