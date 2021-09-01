import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect,useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { searchNews } from '../redux/actions/productaction'
import News from './News'

const Searchnews = () => {
    const {search}=useParams()
    const dispatch=useDispatch()
    var url=`https://newsapi.org/v2/everything?apiKey=79f1ebf121b14cca9767657adca2b65f&q=${search}`
   console.log(search)
    const fetchSearch= useCallback(async ()=>{
        
        try{

        const response = await fetch(`${url}`)
        const data = await response.json()
        
        dispatch(searchNews(data));
        
        }
        catch(error){
            console.log(error)
        }
    },[search])


    useEffect(()=>{
        fetchSearch();
    },[search])


    return(
        <News/>
    )
    
}

export default Searchnews
