import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Under >
        <h4>Developed by Ojesvi</h4>
    </Under>
  )
}

export default Footer

const Under=styled.div`
display:flex;
align-items:center;
justify-content:center;
height:50px;
background-color:black;
color:white;
`;