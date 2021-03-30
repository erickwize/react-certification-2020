import styled from 'styled-components';

export const CardContainer = styled.div`
  display: block;
  flex-direction: column;
  height: fit-content;
  width: 320px;
  height: 320px;
  background-color: rgba(185, 134, 217, 0.2);
  border-radius: 6px;
  margin-bottom: 30px;
  overflow: hidden;
  box-shadow: rgba(50, 44, 78, 0.15) 0px 5px 15px 0px;
  &:hover {
    position: 'absolute';
    opacity: 0.6;
    box-shadow: rgba(254, 223, 3, 0.12) 0px 2px 4px 0px,
      rgba(254, 223, 3) 0px 2px 16px 0px;
  }
  @media screen and (max-width: 812px) {
    width: 95%;
    max-width: 320px;
    height: 320px;
  }
  cursor: not-allowed;
`;

// box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

export const TextContainer = styled.div`
  margin: 0.5rem;
`;
