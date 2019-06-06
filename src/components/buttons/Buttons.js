import React from 'react';
import { StyledButton, StyledButtonSU, StyledButtonContainer } from './styled-buttons/StyledButtons';
import { Link } from 'react-router-dom';

function Button() {
  return (
    <StyledButtonContainer>
      <Link to={'/signup'}>
        <StyledButton>SIGN UP</StyledButton>
      </Link>
      <StyledButtonSU>SIGN IN</StyledButtonSU>
    </StyledButtonContainer>
  );
}

export default Button;
