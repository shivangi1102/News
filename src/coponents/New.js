import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Card,Button ,Col,Row} from 'react-bootstrap'

const Product = () => {

    const products = useSelector((state)=>state.allproduct.products.articles)
    console.log(products)
    if(!products){
        return null
    }
    const list=products.map((product)=>{
       
        const {author,title,urlToImage,description}=product
        return(
            <>
            <Card style={{ width:'900px', backgroundColor:'#f0f8ff',marginTop:'30px',marginLeft:'200px'}} className="cocktail">
                <Row><Col>
                <Card.Img variant="top" style={{height:'15rem'}} src={urlToImage}/>
                </Col>
                <Col>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Body>{description}</Card.Body>
    
    <h6>AUTHOR: {author}</h6>
  </Card.Body>
  </Col>
                </Row>
  
</Card>
            </>
        )
    })

   
    return(
        <>
        <h1 style={{textAlign:'center',marginTop:'20px'}}>Top News</h1>
        {list}
        </>
    )
}

export default Product

