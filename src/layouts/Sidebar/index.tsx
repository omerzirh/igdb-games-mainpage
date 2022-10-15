import React from "react";
import { slide as Menu } from "react-burger-menu";
import './styles.css';
import SidebarElement from "../../components/SidebarElement";
import { sidebarActivities, sidebarOthers } from "../../api/data";
import igdbLogo from "../../assets/igdb.svg";
import { Seperator } from "../../components/Seperator/styles.elements";
const Index = (props: any) => {
  return (
    // Pass on our props
    <Menu {...props} noOverlay customBurgerIcon={false} noTransition>
      <img src={igdbLogo} alt="logo"/>
      <h4 style={{color:"white"}}>
        Activities
      </h4>
      {sidebarActivities.map((elm)=>(
        <SidebarElement icon={elm.icon} title={elm.name} key={elm.id}/>
      ))}
      <h4 style={{color:"white"}}>
        Others
      </h4>
      {sidebarOthers.map((elm)=>(
        <SidebarElement icon={elm.icon} title={elm.name} key={elm.id}/>
      ))}
    </Menu>
  );
};

export default Index;
