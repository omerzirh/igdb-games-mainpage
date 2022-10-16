import React from 'react'
import { ChipsWrapper } from './styles.elements'

export default function Index(props:any) {
    
  return (
    <ChipsWrapper {...props}>
        {props.children}
    </ChipsWrapper>
  )
}
	