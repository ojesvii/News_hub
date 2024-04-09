import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'


const Fetchdata = ({cat}) => {

    const[Data,setData]=useState("");
    const fetchdata = async ()=>{
        await  axios.get(
          cat?
          
          `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=8479972304f9408b9071917e0f1efe7e`

           : 'https://newsapi.org/v2/top-headlines?country=in&apiKey=8479972304f9408b9071917e0f1efe7e'
         )
        .then((res)=>setData(res.data.articles));
    };
useEffect(()=>{
fetchdata()
console.log({Data})

},[cat]);



  return (
    <>
    <div className='container my-3'>
        <h3><u>TOP HEADLINES</u></h3>
        <h5>
            <div className='container d-flex justify-content-center align-items-center flex-wrap my-3 '>
                {Data?Data.map((value,index)=>(
           <>
           <Hello>
           <div className='container my-3 p-3 main ' >
           <h3>{value.title}</h3>
           <img src={value.urlToImage} alt="image not available " className='container d-flex justify-content-center align-items-center flex-column my-3'/>
           <h5>{value.content}</h5>
           <Link to={value.url}>View more</Link>
           </div>
           </Hello>
           </> 
        )):"loading"}
        </div>
        </h5>
        
    </div>
    <Footer/>
    </>
  )
}

export default Fetchdata
const Hello=styled.div`
img{
    height:200px;
    width:100%;
    objectfit:"cover";
}


.main{
    box-shadow:2px  2px 10px silver;
    width:400px;
    height:480px;
    border-radius:10px;
    // gap:20px;
    display:flex;
    flex-direction:column;
    margin-right: 20px;
    align-items:center;
    justify-content:space-between;
    background-color:#D3D3D3;
}
.main a{
    // padding-top:18px;
    text-decoration:none;
}
.main h3{
    font-size:20px;
}
.main h5{
    font-size:14px;
}
h5{
    font-size:15px;
}

`;