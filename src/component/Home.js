import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { getmethod } from '../utilies/apiRequest';
import { categoryUrl } from '../utilies/apiEndPoints';
import { useHistory } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';

function Home() {
    const history = useHistory();
    const [apiData, setApiData] = useState([]);
    const [loading, setloading] = useState(true);


    const Data = async () => {
        const res = await getmethod(categoryUrl)
        setApiData(res.data)
        setloading(false)
    }
    useEffect(() => { Data() }, [])

    const ProductData = async (cagt) => {
        history.push(`/Categoryproduct`, { data: cagt });
    }


    if (loading) {
        return (
            <div className="loader d-flex m-5"></div>
        )


    } else {

        return (
            <>
                <Row xs={1} md={4} className="g-4- m-5">
                    {apiData.map((cagt, inx) => {
                        return (
                            <Col key={inx}>
                                <Card style={{ width: '18rem', boxShadow: "0px 21px 26px -4px rgba(0,0,0,0.75)" }} className="mb-5">
                                    <Card.Body>
                                        <Card.Title>{cagt.toUpperCase()}</Card.Title>
                                        <Card.Text>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum ullam non ratione!
                                        </Card.Text>
                                        <Button variant="outline-danger" onClick={() => ProductData(cagt)}> view {cagt} products</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}

                </Row>
            </>
        )

    }



}

export default Home