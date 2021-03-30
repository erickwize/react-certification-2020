import styled from 'styled-components';

export const ThumbnailImg = styled.div`
  display: block;
  height: 170px;
  width: 100%;
  background: url(${(props) => props.bg}) no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 4px 4px 0 0;
  overflow: hidden;
  text-align: center;
  background-color: #ffffff;
  border: 1px solid white;
`;
