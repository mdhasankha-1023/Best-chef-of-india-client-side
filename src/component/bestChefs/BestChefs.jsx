import React, { useEffect, useState } from 'react';
import './BestChefs.css'
import Chef from '../chef/Chef';
import { Col, Container, Row } from 'react-bootstrap';

const BestChefs = () => {
    const [allChefs, setAllChefs] = useState([])


    useEffect( () => {
        fetch('http://localhost:5000/all-chefs')
        .then(res => res.json())
        .then(data => setAllChefs(data))
    } ,[])

    
    return (
        <Container className='my-5'>
            <h1 className='text-center my-5'>Best Chefs</h1>
            <Row>
            {
                allChefs.map(chef => <Col sm={4} className='g-5'>
                <Chef
                key={chef.id}
                chef={chef}></Chef>
                </Col>)
            }
            </Row>
        </Container>
    );
};

export default BestChefs;