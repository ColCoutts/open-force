import styled from 'styled-components';

const StyledSignUpSection = styled.section `
  display: flex;
  justify-content: center; 
  background-color: #0F3A4E;
  height: 100vh;
  `;
  
const StyledSignUpForm = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5rem;
  width: 25vw;
  height: 50vh;
  background-color: #D5E3EA;
  padding: 1rem;

  input {
    display: block;
    height: 3rem;
    margin: .5rem 0;
    font-size: 1em;
    text-align: left;
      ::placeholder {
        color: pink;
      }
      ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: pink;
      }
      ::-moz-placeholder { /* Firefox 19+ */
        color: pink;
      }
      :-ms-input-placeholder { /* IE 10+ */
        color: pink;
      }
      :-moz-placeholder { /* Firefox 18- */
        color: pink;
      }
  }
  button {
    display: flex;
    justify-content: center;
    height: 3rem;
    margin-top: .5rem;
    background-color: #82ADC1;
    font-size: 1em;
  }
`;

export { StyledSignUpSection, StyledSignUpForm };
