import styled from 'styled-components';

const StyledProjects = styled.li `
  list-style-type: none;
  margin-bottom: 1.5rem;
  margin-top: 5rem;
  width: 75vw;
`;

const StyledProjectSection = styled.section `
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  background-color: #F4FFFD;
  height: 25rem;
  width: 75vw;
  
    img {
      width: 13rem;
      height: auto;
      margin-right: 5rem;
    }
`;

const StyledProjectText = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 15rem;
    flex: 1 0 auto;
    margin: 0 5rem;

    p {
      flex-grow: 0;
    }
`;


export { StyledProjects, StyledProjectSection, StyledProjectText };
