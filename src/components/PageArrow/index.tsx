import React, { useState } from 'react'
import ArrowSvg from "../../assets/arrow.svg";
import { ArrowImg, ArrowWrapper } from './styles.elements';
export default function Index(props:any) {
    const [side, setSide] = useState(props.side==="right"?"rotate(180deg)":"");
    


  return (
    <ArrowWrapper>
        <ArrowImg src={ArrowSvg} width="7.5px" height="15px" alt="arrow" style={{transform:side}}/>
    </ArrowWrapper>
  )
}
