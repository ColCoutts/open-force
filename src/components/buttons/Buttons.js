import React from 'react';
import { StyledButton, StyledButtonSU, StyledButtonContainer } from './styled-buttons/StyledButtons';

function Button() {
  return (
    <StyledButtonContainer>
      <StyledButton>SIGN UP</StyledButton>
      <StyledButtonSU>SIGN IN</StyledButtonSU>
    </StyledButtonContainer>
  );
}

export default Button;
