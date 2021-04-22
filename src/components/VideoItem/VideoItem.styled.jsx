import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  width: 25%;
  padding: 10px;
  cursor: pointer;
  width: ${(props) => (typeof props.related === 'undefined' ? '25%' : '100%')};
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const Title = styled.p`
  font-size: 13px;
  margin-top: 0;
`;
const Thumbnail = styled.img`
  border-radius: 15px;
  width: 100%;
  max-height: 99px;
  object-fit: cover;
  @media (max-width: 500px) {
    max-height: 140px;
  }
`;

export { Wrapper, Title, Thumbnail };
