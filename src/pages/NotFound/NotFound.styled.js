import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px 40px;

  a {
    font-size: 1rem;
    text-decoration: none;
    display: block;
    text-align: right;
    padding: 0.2rem 0.3rem;

    ::before {
      content: '←';
      padding-right: 0.2rem;
      display: inline-block;
    }
  }
`;

const Title = styled.h1`
  flex-basis: 100%;
  text-align: center;
  font-size: 3rem;
  letter-spacing: -2px;
  margin: 10px 20px;
`;

const Imagen = styled.img`
  width: 360px;
  height: 400px;
  margin: 10px 20px;
`;

export { Section, Title, Imagen };
