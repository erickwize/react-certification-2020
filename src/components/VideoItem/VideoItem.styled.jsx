import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  width: 25%;
  padding: 10px;
  cursor: pointer;
  width: ${(props) => (typeof props.related === 'undefined' ? '25%' : '100%')};
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const Title = styled.p`
  font-size: 15px;
  margin-top: 0;
  color: ${(props) => props.theme.text || 'red'};
  transition: all 0.1s ease-in-out;
`;
export const Text = styled.p`
  font-size: 14px;
  margin-top: 20px;
  color: ${(props) => props.theme.text || 'red'};
  transition: all 0.1s ease-in-out;
`;
export const Thumbnail = styled.img`
  border-radius: 3px;
  width: 100%;
  max-height: 50%;
  object-fit: cover;
  border: 0 solid transparent;
  transition: all 0.3s ease-in-out;
  &:hover {
    border-color: ${(props) => props.theme.contrast || 'red'};
    border-width: 10px;
  }
  @media (max-width: 500px) {
    max-height: 140px;
  }
`;
