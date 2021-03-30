import styled from 'styled-components';

export const VideoInfo = styled.div`
  display: block;
  margin: 0.5rem;
`;

export const VideoTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #6c56a3;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  overflow: hidden;
  text-align: left;
  margin: 10px 0 8px;
`;

export const VideoDescription = styled.p`
  font-size: 12px;
  color: #262626;
  font-weight: 400;
  font-family: 'Open Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
    Geneva, Verdana, sans-serif;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
  margin: 0;
`;
