import styled from 'styled-components';

const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  font-size: 15px;
  justify-content: space-between;
  margin: 0px 15px;
  overflow: hidden;
  padding: 0px;
  position: relative;
  width: 100px;
  height: 100%;
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.text};

  @media (max-width: 800px) {
    width: 60px;
    font-size: 12px;
    margin: 0px;
  }
`;

export { Button };
