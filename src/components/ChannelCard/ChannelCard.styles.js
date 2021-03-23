import styled from 'styled-components';

export const Image = styled.div`
  height: 160px;
  width: 160px;
  margin-top: -5px;
  margin-right: 5px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  transition: 100ms;
`;

export const Channel = styled.div`
  background-color: #fefefe;
  max-width: 400px;
  height: 150px;
  border-radius: 8px;
  display: inline-block;
  margin: 15px 20px;
  vertical-align: top;
  text-align: left;
  transition: 200ms;
  &:hover {
    background-color: #fcdfdf;
    margin-top: 10px;
    margin-bottom: 20px;
    box-shadow: 6px 6px #cecece;
    cursor: pointer;
  }
  &:hover ${Image} {
    width: 180px;
    margin-left: -18px;
    box-shadow: 4px 6px #cecece;
  }
`;

export const Content = styled.div`
  display: flex;
`;

export const Text = styled.div`
  flex: 2;
  margin-bottom: 10px;
  margin-left: 12px;
  margin-right: 12px;
`;

export const Description = styled.small`
  font-size: 10pt;
  line-height: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const Title = styled.strong`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
