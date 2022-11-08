import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Container, Button } from 'react-bootstrap'

function Cart({ dataToCart }) {

  const [ProductData, setProductData] = useState();



  const data = (dataToCart) => {
    setProductData(dataToCart);
  }

  console.log(ProductData, "cart-page");

  useEffect(() => { if (dataToCart) { data(dataToCart) } }, [])

  return (

    <Container className="mt-5">

      {ProductData && ProductData.map((item) => {
        return (
          <Row>
            <Card className="p-4" style={{ width: "35rem" }}>
              <Card.Img variant="top" src={item.image} className="card-img" />
              <Card.Body>
                <Card.Title style={{ fontFamily: "Georgia, serif" }}>{item.title}</Card.Title>
                <Card.Title>$ {item.price}</Card.Title>
                <Card.Text style={{ fontFamily: "serif", fontSize: 15 }}>{item.description}</Card.Text>
                <Button disabled > Add To Cart</Button>
              </Card.Body>
            </Card>
          </Row>
        )
      })}


    </Container>


  )
}

export default Cart