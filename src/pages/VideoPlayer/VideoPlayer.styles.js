import styled from 'styled-components';
import { color, fontSize } from '../../utils/globalStyle';

export const HomeButton = styled.button`
  height: fit-content;
  width: fit-content;
  border-radius: 4px;
  margin: 15px 10px;
  color: white;
  padding: 8px 15px;
  font-size: ${fontSize.l};
  display: block;
  background-color: ${color.lightCoral};
  border: none;
`;

export const Player = styled.iframe`
  height: 423px;
  width: 100%;
  display: block;
  background-color: ${color.black};
`;

export const PlayerGrid = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 15px;
`;

export const VideoWrapper = styled.section`
  display: block;
  max-width: 60%;
  background-color: ${color.lightCoral};
  padding: 10px;
  height: fit-content;
  color: ${color.white};
`;

export const PlayerTitle = styled.h2`
  font-weight: normal;
  font-size: ${fontSize.xxxl};
  margin: 10px 0 0;
  line-height: normal;
  color: ${color.oceanBlue};
  font-weight: bolder;
`;

export const PlayerInfo = styled.span`
  font-weight: normal;
  font-size: ${fontSize.md};
  margin: 0 5px;
  text-align: right;
  padding: 3px 10px 5px;
  display: block;
  color: ${color.oceanBlue};
`;

export const PlayerDesc = styled.p`
  font-weight: normal;
  font-size: ${fontSize.default};
  margin: 5px 0 15px;
  padding: 10px 15px 0;
  display: block;
  width: 100%;
`;

export const RelatedVideoWrapper = styled.section`
  display: block;
  margin: 0 auto;
  width: 40%;
  margin-left: 20px;
  max-height: 630px;
  overflow-x: overlay;
  color: ${color.black};
`;
