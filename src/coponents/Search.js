import React from 'react'
import { Link } from 'react-router-dom'
import { Form,FormControl,Button } from 'react-bootstrap'

import { useState,useEffect,useCallback } from 'react';







function Search() {

    const [search,setsearchnews]=useState('')
    


  
  function handleSubmit(e) {
    e.preventDefault()
  }

  function resetsearch() {
    setsearchnews("")
  }

    
    return (
        <>
        
            <Form className="d-flex " >
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        style={{borderRadius:'4px',borderColor:'green'}}
        value={search}
        onChange={(e)=>setsearchnews(e.target.value)}
            
        
      />
      <Link to={`/search/${search}`}> <Button  onClick={resetsearch} type='submit'   variant="success" style={{marginLeft:'20px',borderRadius:'35px',paddingLeft:'20px',paddingRight:'20px',fontWeight:'bold'}}>Search</Button>
      </Link>
      
    </Form>

    
    
        </>
    )
}

export default Search
