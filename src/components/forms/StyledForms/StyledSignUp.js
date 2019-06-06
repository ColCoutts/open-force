import styled from 'styled-components';

const StyledSignUpSection = styled.section `
  display: flex;
  border: 5px solid yellow;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
      display: block;
    }

    button {
      display: flex;
      justify-content: center;
    }
  }
`;

export { StyledSignUpSection };
