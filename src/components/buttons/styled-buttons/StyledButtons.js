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
  border-bottom: .25em solid #AD8F7F;
  transition: .2s; 
  
    :hover {
      background-color: #82ADC1;
      transform: translateY(-.2rem);
      transition: .25s;
      color: #D5E3EA;
      
    }

    :active {
      transform: translateY(-1px);
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

const StyledButtonContainer = styled.section `
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  background-color: #EDC4AE; 
  align-items: center;
  height: 75vh;
`;

export { StyledButton, StyledButtonSU, StyledButtonContainer };
