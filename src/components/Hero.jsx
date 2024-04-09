import React from 'react'
import styled from 'styled-components'

const Hero = () => {
  return (
    <Container>
    <div className='contain container-fluid'>
        <h2>Desh Ki News Apki news</h2>
        <h5><b>पढ़िए खबरें कभी भी, कहीं भी</b></h5>
    </div>
    </Container>
  )
}

export default Hero

const  Container=styled.div`
.contain{
     display:flex;
     flex-direction:column;
    justify-content:center;
    align-items:center;
   background-color:orange;
   height:25vh;
}
h2{
    font-size:50px;
}

`;