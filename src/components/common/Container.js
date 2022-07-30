import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 480px;
  height: auto;
  margin: 0 auto;
  padding-top: 20px;
  background-color: ${p => p.theme.colors.background};
  background-position: center;
  background-size: cover;
`;
