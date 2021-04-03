import styled from 'styled-components';

const VideoBox = styled.div`
  height: 330px;
  width: 330px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #ddd;
  margin: 10px;
  cursor: pointer;
  img {
    width: 100%;
    height: 150px;
    /* background-size: cover;
    display: block;
    background-repeat: no-repeat;
    background-position: center; */
  }
  h3 {
    margin: 0 1rem;
    text-align: center;
    margin-top: 0px;
    color: black;
    font-size: 15px;
  }
  p {
    color: #575656;
    font-size: 13px;
    text-align: start;
    padding: 0px 5px 0px 10px;
  }
`;

export default VideoBox;
