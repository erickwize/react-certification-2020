import styled from 'styled-components';
import { color, fontSize } from '../../utils/globalStyle';

export const VideoCardWrapper = styled.div`
  height: fit-content;
  width: 355px;
  height: 240px;
  margin: auto;
  padding: 10px;
  background: ${color.lightCoral};
  box-shadow: rgba(249, 199, 174, 0.12) 0px 2px 4px 0px,
    rgba(249, 199, 174, 0.32) 0px 2px 16px 0px;
  margin-bottom: 30px;
  color: ${color.white};

  @media screen and (max-width: 750px) {
    width: 95%;
    height: 300px;
  }
`;

export const VideoOverlay = styled.div`
  width: 100%;
  height: 100%;
  :hover {
    background: rgba(254, 167, 156, 0.8);
  }
`;

export const VideoTitle = styled.p`
  background: ${(props) => (props.visible ? 'transparent' : 'rgba(254, 167, 156, 0.8)')};
  width: 335px;
  font-size: ${fontSize.default};
  margin: 0 0 8px;
  font-weight: bolder;
  padding: 8px;
  text-align: right;
`;

export const VideoInfo = styled.p`
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  font-size: ${fontSize.sm};
  font-weight: bold;
  display: inline-flex;
  display: flex;
  justify-content: flex-end;
  margin: 0;
`;

export const Thumbnail = styled.div`
  background: url(${(props) => props.img}) no-repeat;
  height: 100%;
  display: block;
  background-size: cover;
  background-position: center;
`;

export const VideoDescription = styled.div`
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  height: 135px;
  width: 335px;
  font-size: ${fontSize.md};
  margin: 0 0 8px;
  font-weight: normal;
  padding: 10px 12px;
  color: ${color.white};
`;

export const FavoriteSelect = styled.button`
  background: url(${(props) => props.img}) no-repeat;
  height: 30px;
  width: 30px;
  background-size: cover;
  background-position: center;
  border: none;
  display: inline-block;
  margin: 1px;
  z-index: 100;
`;
