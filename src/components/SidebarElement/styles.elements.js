import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
display:flex;
align-items:flex-start;
justify-content:start;
/* flex-direction: row; */
column-gap: 15px;
width:fit-content;

`;
export const Icon = styled(FontAwesomeIcon)`

`;

export const Title = styled.h3`
    font-size: 1rem;
    color:white;
`;