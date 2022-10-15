import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import sampleImg from "../../assets/gameSample.svg";
import { Seperator } from '../../components/Seperator/styles.elements';
import { Links } from './styles.elements';
import {Icon} from "../../components/Icon/styles.elements";
import add from "../../assets/link_icons/add.svg"
import dart from "../../assets/link_icons/dart.svg"
import fav from "../../assets/link_icons/fav.svg"
import forward from "../../assets/link_icons/forward.svg"
function Index(props:any) {

  return (
    <Card style={{ width: '333px',background:"transparent",alignItems:'center',border:'none',color:"white"}}>
      <Card.Img variant="top" src={props.image} style={{marginBottom:"-50px", width:"95%",height:"180px", zIndex:"999"}}  />
      <Card.Body style={{backgroundColor:"#202134",borderRadius:"10px",paddingTop:"50px",width:"333px"}}>
        <Card.Title >{props.title}</Card.Title>
     
        <Card.Subtitle style={{color:"#9BA0AD"}}>
    {props.subtitle}
        </Card.Subtitle>
        <Card.Text>
         {props.description}
        </Card.Text>
        <Seperator/>
        <Links>
        <Icon src={dart}/>
        <Icon src={add}/>
        <Icon src={fav}/>
        <Icon src={forward}/>
        </Links>
      </Card.Body>
    </Card>
  );
}

export default Index;