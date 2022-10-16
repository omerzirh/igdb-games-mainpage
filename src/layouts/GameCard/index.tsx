import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import sampleImg from "../../assets/gameSample.svg";
import { Seperator } from "../../components/Seperator/styles.elements";
import {
  CardBody,
  CardBoot,
  CardImage,
  CardSubtitle,
  CardText,
  CardTitle,
  Links,
} from "./styles.elements";
import { Icon } from "../../components/Icon/styles.elements";
import add from "../../assets/link_icons/add.svg";
import dart from "../../assets/link_icons/dart.svg";
import fav from "../../assets/link_icons/fav.svg";
import forward from "../../assets/link_icons/forward.svg";
function Index(props: any) {
  return (
    <CardBoot>
      <CardImage variant="top" src={props.image} />
      <CardBody>
        <CardTitle>{props.title}</CardTitle>

        <CardSubtitle>{props.subtitle}</CardSubtitle>
        <CardText>{props.description}</CardText>
        <Seperator />
        <Links>
          <Icon src={dart} />
          <Icon src={add} />
          <Icon src={fav} />
          <Icon src={forward} />
        </Links>
      </CardBody>
    </CardBoot>
  );
}

export default Index;
