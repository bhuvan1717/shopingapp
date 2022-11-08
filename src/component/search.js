import React, { useState, useEffect } from 'react'
import { Container, Form, FormControl, ListGroup } from 'react-bootstrap'
import { product } from '../utilies/apiEndPoints';
import { getmethod } from '../utilies/apiRequest';

const Search = () => {

    const [allitems, setallitems] = useState([]);
    const [search, setsearch] = useState([]);

    const allproduct = async () => {
        const productdata = await getmethod(`${product}`);
        console.log(productdata.data)
        setallitems(productdata.data)
    }

    useEffect(() => {
        allproduct();
    }, []);

    const searchResultData = (event) => {
        event.preventDefault()
        console.log(event.target.value, "---");
        const searchtyped = event.target.value
        const matched = allitems.filter((val) => {
            return val.title.toLowerCase().startsWith(searchtyped.toLowerCase())

        });
        console.log(matched, "matched")
        setsearch(matched)

    }

    return (
        <div>
            <Container className="mt-5">
                <Form className="d-flex" style={{ width: "20rem" }}>
                    <FormControl type="search" placeholder="Search ..." className="me-2" aria-label="Search" onChange={(event) => searchResultData(event)} />
                </Form>

                <div className='mt-5'>
                    <ListGroup>
                        {search && search.map((srh) => {
                            return (
                                <ListGroup.Item>{srh.title}</ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                </div>



            </Container>
        </div>
    )
}

export default Search