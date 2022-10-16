import styled from "styled-components";
import { slide as Menu } from "react-burger-menu";

export const ImageWrapper = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const LinksWrapper = styled.div`
  display: flex !important;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  margin-top: 70px;
  row-gap: 10px;
`;
export const HeaderWrapper = styled.div`
  font-size: 1rem;
  background-color: rgba(175,175,175,0.1);
  padding: 1rem 2rem 0.5rem 4rem;
  position: relative;
  left: -65px;
  border-radius: 0 25px 25px 0 ;
`;
export const Header = styled.h3`
  font-size: 1rem;
  z-index:999;
`;
