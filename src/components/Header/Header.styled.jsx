import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px 20px;
  height: 70px;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.toolbar_bg || 'red'};
  box-shadow: 0 0 10px ${(props) => props.theme.toolbar_shadow || 'red'};
  transition: all 0.4s ease-in-out;
`;
export const Left = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Right = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Favorite = styled.div`
  display: inline-block;
  font-size: 30px;
  text-align: center;
  padding: 5px;
  transform: translateY(-10px);
`;
export const LinkText = styled.div`
  display: inline-block;
  font-size: 15px;
  text-align: center;
  padding: 0 15px;
  line-height: 40px;
`;
