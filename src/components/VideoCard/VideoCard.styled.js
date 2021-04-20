import styled from 'styled-components';

const VideoBox = styled.div`
  height: 330px;
  width: 330px;
  border-radius: 10px;
  border: 1px solid #a0aec0;
  margin: 10px;
  cursor: pointer;
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    object-position: center center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  h3 {
    margin: 0 1rem;
    text-align: center;
    margin-top: 0px;
    font-size: 15px;
  }
  p {
    color: ${({ theme }) => theme.cardText};
    font-size: 13px;
    text-align: start;
    padding: 0px 5px 0px 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
`;

export default VideoBox;
