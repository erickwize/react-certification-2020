import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  width: 50%;
  padding: 10px;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
`;
export const Title = styled.div`
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  margin-top: 18px;
`;
export const Thumbnail = styled.img`
  border-radius: 15px;
  width: 100%;
  max-height: 99px;
  object-fit: cover;
  @media (max-width: 500px) {
    max-height: 140px;
  }
`;
export const Iframe = styled.iframe`
  border-radius: 15px;
  width: 100%;
  object-fit: cover;
  @media (max-width: 500px) {
    max-height: 140px;
  }
`;
export const Favorite = styled.div`
  display: inline-block;
  width: 60px;
  height: 60px;
  padding: 10px;
  &:after {
    content: '★';
    font-size: 35px;
    color: ${(props) => (props.active === true ? 'yellow' : 'grey')};
  }
`;
