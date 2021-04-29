import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const Title = styled.p`
  font-size: 13px;
  margin-top: 0;
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
export const Related = styled.div`
  display: block;
  width: 300px;
  padding: 10px;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
