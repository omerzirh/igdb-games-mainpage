import React from 'react'
import { Container, Icon, Title } from './styles.elements'
import {faTrophy} from "@fortawesome/free-solid-svg-icons";

// interface SidebarSection{
//     icon:Object|undefined|null|string,
//     title:string
// };
export default function Index(props:any) {
const {icon,title} =props;
  return (
    <Container>
        <Icon icon={icon}/>
        {/* <FontAwesomeIcon icon="fa-solid fa-trophy" /> */}
        <Title>
            {title}
        </Title>
    </Container>
    )
}
