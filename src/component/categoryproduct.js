import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { productsUrl } from '../utilies/apiEndPoints';
import { getmethod } from '../utilies/apiRequest';

const Categoryproduct = ({ cartlist }) => {

    const history = useHistory()
    let location = useLocation();

    const [Products, setProducts] = useState([]);
    const [loading, setloading] = useState(true);

    const Data = async (products) => {
        const res = await getmethod(`${productsUrl}${products}`)
        setProducts(res.data);
        setloading(false)
    }

    useEffect(() => {
        if (location) {
            // console.log(location.state.data)
            Data(location.state.data);
            setloading(false)
        }
    }, [location]);


    const viewProduct = (data) => {
        // console.log(data)
        history.push("/productDetails", { id: data })
    }

    if (loading) {
        return (
            <div className="loader d-flex m-5"></div>
        );
    } else {
        return (
            <Container>
                <Row xs={1} md={3} className="g-4- mt-5">
                    {Products && Products.map((data, idx) => (
                        <Col>
                            <Card className=" p-4 mb-5 shadow productcard">
                                <Card.Img variant="top" src={data.image} className="card-img" />
                                <Card.Body>
                                    <Card.Title> {data.title}</Card.Title>
                                    <Card.Title>$ {data.price}</Card.Title>
                                    <Card.Text style={{ overflow: "hidden" }}>
                                        {data.description}
                                    </Card.Text>


                                    <div className='d-flex justify-content-between'>
                                        <Button variant="outline-danger" onClick={() => cartlist(data)}> Add To Cart</Button>
                                        <Button variant="outline-success" onClick={() => viewProduct(data.id)}> view product</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default Categoryproduct