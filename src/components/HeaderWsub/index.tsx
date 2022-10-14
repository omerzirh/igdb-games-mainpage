import React from 'react'
import { Subtitle, Title, Wrapper } from './styles.elements'

export default function Index(props:any) {
  return (
    <Wrapper style={{alignItems:props.alignItems}}>
        <Title>
            Neroin
        </Title>
        <Subtitle>
            Omer ZIRH
        </Subtitle>
    </Wrapper>
  )
}
