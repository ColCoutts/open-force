import styled from 'styled-components';

const StyledButton = styled.button `
  display: inline-block;
  width: 13rem;
  height: 5rem;
  margin: 0 2rem;
  text-transform: uppercase;
  font-size: 1.5em;
  font-weight: 700;
  border: none;
  background-color: #D5E3EA;
  color: #0F3A4E;
  transition: .3s; 
  box-shadow: 0 .2em 0;
  
    :hover {
      background-color: #82ADC1;
      transform: translateY(-.2rem);
      transition: .5s;
      color: #D5E3EA;
      box-shadow: 0 .29em 0 #0F3A4E;
    }

    :active {
      transform: translateY(-1px);
      box-shadow: 0 .2em 0 #0F3A4E;
    }

    :focus {
      outline: 0;
    }

    `;

const StyledButtonSU = styled(StyledButton) `
    background-color: #F8B2A5;
    color: #432520

    :hover {
      background-color: #F48673;
      color: #FBD3CC;
    }
`;

const StyledButtonShadow = styled.div `
  display: inline-block;
  width: 13rem;
  height: 5rem;
  margin: 0 2rem;
  text-transform: uppercase;
  font-size: 1.5em;
  font-weight: 700;
  border: none;
  background-color: #AD8F7F;
`;

const StyledButtonContainer = styled.section `
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  background-color: #EDC4AE; 
  align-items: center;
  height: 75vh;
`;


export { StyledButton, StyledButtonSU, StyledButtonContainer, StyledButtonShadow };
