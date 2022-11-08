import React, { useEffect, useState } from "react";
import { getmethod } from "../utilies/apiRequest";
import { Card, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";
import { product } from "../utilies/apiEndPoints";

function ProductDetails({ searchedTitle }) {

    const location = useLocation();

    const [productdata, setproductdata] = useState();

    useEffect(() => {
        if (location) {
            productApi(location.state.id)
        }
    }, []);

    const productApi = async (id) => {
        console.log(id);
        const productdata = await getmethod(`${product}${id}`);
        console.log(productdata.data, "product")
        setproductdata(productdata.data)
    }

    useEffect(() => { });

    return (
        <>
            <Container className="mt-5">
                {productdata &&
                    <Card className="p-4" style={{ width: "35rem" }}>
                        <Card.Img
                            variant="top"
                            src={productdata.image}
                            className="card-img"
                        />
                        <Card.Body>
                            <Card.Title style={{ fontFamily: "Georgia, serif" }}>
                                {productdata.title}
                            </Card.Title>
                            <Card.Title>$ {productdata.price}</Card.Title>
                            <Card.Text style={{ fontFamily: "serif", fontSize: 15 }}>
                                {productdata.description}
                            </Card.Text>
                            <Button disabled > Add To Cart</Button>
                        </Card.Body>
                    </Card>
                }
            </Container>



        </>
    );
}

export default ProductDetails;
