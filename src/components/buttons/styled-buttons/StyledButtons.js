import styled from 'styled-components';

const StyledButton = styled.button `
  width: 10rem;
  height: 5rem;
`;

const StyledButtonSU = styled(StyledButton) `
  background-color: blue;
`;

const StyledButtonContainer = styled.section `
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  align-items: center;
  height: 75vh;
`;

export { StyledButton, StyledButtonSU, StyledButtonContainer };
