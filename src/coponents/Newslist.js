import React from 'react'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import Product from './New'
import { useEffect,useState } from 'react'
import { setProducts,loading } from '../redux/actions/productaction'
const Newslist = () => {
    
  
    const dispatch=useDispatch()
    const url='https://newsapi.org/v2/top-headlines?country=in&apiKey=79f1ebf121b14cca9767657adca2b65f&pageSize=10'

    
    const getnews = async () => {
      
   
      const response = await axios
      .get('https://newsapi.org/v2/top-headlines?country=in&apiKey=79f1ebf121b14cca9767657adca2b65f&pageSize=10')
      .catch((err) => {
        console.log("Err: ", err);
       
      });
      dispatch(setProducts(response.data))
      };

    useEffect(()=>{
        getnews()

    },[])
    
    return (
        <div>
       
         <Product/> 
          
        </div>
    )
}

export default Newslist
