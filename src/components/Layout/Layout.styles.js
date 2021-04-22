import styled from "styled-components";

export const Container = styled.div`
  padding: 7rem 3rem 3rem 3rem;
  background-color: ${props => props.theme.body.backgroundColor};
  
  a{
    color: ${props => props.theme.body.color};
  }

  @media(max-width:1024px){
    padding: 7rem 0 0 0;
  }
`;
