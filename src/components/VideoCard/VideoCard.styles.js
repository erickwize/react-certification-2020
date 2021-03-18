import styled from 'styled-components'

export const VideoCardWrapper = styled.section `
height: fit-content;
width: 30%;
height: 345px;
margin: 10px;
box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
border-radius: 10px;
margin-bottom: 30px;
cursor: not-allowed;

&:hover {
  box-shadow: rgba(254,223,3, 0.12) 0px 2px 4px 0px, rgba(254,223,3) 0px 2px 16px 0px;

}
`;

export const VideoTitle = styled.p `
font-size: 18px;
margin: 10px 0 8px;
`;

export const VideoChannel = styled.p `
font-size: 12px;
font-weight: bold;
display: inline-flex;
margin: 0;
`;

export const UploadDate = styled.span `
font-size: 12px;
font-weight: normal;
margin-left: 5px;
`;

export const Thumbnail = styled.div `
background: url(${props => props.img}) no-repeat;
height: 150px;
display: block;
background-size: cover;
background-position: center;
border-radius: 10px 10px 0 0;
`;

export const VideoCardInfo = styled.div `
margin: 10px;
`;

export const VideoDescription = styled.p `
font-size: 14px;
margin-top: 8px;
`;
