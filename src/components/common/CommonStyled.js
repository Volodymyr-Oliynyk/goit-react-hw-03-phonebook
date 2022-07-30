import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px 10px;
  margin: 5px 10px;
  text-transform: capitalize;
  background-color: ${p => p.theme.colors.backgroundButton};
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  cursor: pointer;
  :hover {
    background-color: ${p => p.theme.colors.accent};
  }
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: 700;
  color: #0000ff;
`;

export const FindStyled = styled.p`
  font-weight: 500;
  color: #0000f0;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  min-width: 300px;
  padding-left: 20px;
  height: 40px;
  font-family: inherit;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  box-shadow: inset 0.2rem 0.2rem 0.5rem #ffffff;
  background: #6178ea;
  color: #0000ff;
`;
