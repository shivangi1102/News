import React from 'react'
import { Card,Row,Col,Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const News = () => {
    const product = useSelector((state)=>state.product.articles)
    console.log(product)
    if(!product){
        return null
    }
    const list=product.map((prod)=>{
        const {author,title,urlToImage,description}=prod
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
        {list}
        </>
    )
    
}

export default News
