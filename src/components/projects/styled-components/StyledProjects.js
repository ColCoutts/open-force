import styled from 'styled-components';

const StyledProjects = styled.li `
  display: flex;
  background-color: lavender;
`;

const StyledProjectSection = styled.section `
  display: flex;
  justify-content: space-around
  flex-wrap: wrap;
  align-items: center;
  height: 10rem;
  width: 100vw;
  border: 2px solid yellow;

    img {
      width: 13rem;
      height: auto;
      margin-right: 5rem;
    }
`;

const StyledProjectText = styled.section `
    display: flex;
    flex-direction: column;
    width: 30rem;
    flex: 1 0 auto;
    margin: 0 5rem;
    border: 5px solid green;

    p {
      flex-grow: 0;
    }
`;


export { StyledProjects, StyledProjectSection, StyledProjectText };
