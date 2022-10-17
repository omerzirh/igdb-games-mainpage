import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./styles.css";
import SidebarElement from "../../components/SidebarElement";
import { sidebarActivities, sidebarOthers } from "../../api/data";
import igdbLogo from "../../assets/igdb.svg";
import { Header, HeaderWrapper, ImageWrapper, LinksWrapper } from "./styles.elements";
const Index = (props: any) => {
  return (
    // Pass on our props
    <Menu
      {...props}
      noOverlay
      customBurgerIcon={false}
      noTransition
      styles={{ bmMenu: { display: "flex", justifyContent: "center" } }}
    >
      <ImageWrapper>
        <img src={igdbLogo} alt="logo" />
      </ImageWrapper>
      <LinksWrapper>
      <HeaderWrapper>


        <Header>ACTIVITIES</Header>
      </HeaderWrapper>
        {sidebarActivities.map((elm) => (
          <SidebarElement icon={elm.icon} title={elm.name} key={elm.id} />
        ))}
      <HeaderWrapper>
        <Header>OTHERS</Header>
      </HeaderWrapper>
        {sidebarOthers.map((elm) => (
          <SidebarElement icon={elm.icon} title={elm.name} key={elm.id} />
        ))}
      </LinksWrapper>
    </Menu>
  );
};

export default Index;
