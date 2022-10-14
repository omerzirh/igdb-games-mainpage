import React from "react";
import HeaderWsub from "../HeaderWsub";
import Notification from "../Notification";
import { ImageCircle, ProfileWrapper } from "./styles.elements";
import Chips from "../Chips";
export default function Index() {
  return (
    <ProfileWrapper>
      <HeaderWsub alignItems="flex-end" />
      <ImageCircle/>   {/*imitates profile picture circle */}
      <Notification width={"35px"} height="40px" color={"white"} count={10} />
    </ProfileWrapper>
  );
}
