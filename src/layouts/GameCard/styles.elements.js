import { Card } from "react-bootstrap";
import styled from "styled-components";

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CardImage = styled(Card.Img)`
  margin-bottom: -50px;
  width: 95%;
  height: 180px;
  z-index: 999;
`;
export const CardBoot = styled(Card)`
  width: 333px;
  background: transparent;
  align-items: center;
  border: none;
  color: white;
  display:flex;
  /* box-shadow: -100px -100px 91px -100px rgba(251, 12, 39, 1); */
`;
export const CardTitle = styled(Card.Title)``;
export const CardBody = styled(Card.Body)`
  background-color: #202134;
  border-radius: 10px;
  padding-top: 50px;
  width: 333px;
  margin-top: 20px;
`;
export const CardSubtitle = styled(Card.Subtitle)`
  color: #9ba0ad;
`;
export const CardText = styled(Card.Text)`
  margin-top: 10px;
`;
