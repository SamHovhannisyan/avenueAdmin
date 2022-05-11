import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import css from './data.module.css';

const Data = ({item}) => {

    const image = item.images ? JSON.parse(item.images) : 'image'

    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12} md={12} xs={12}>
                        <div className={css.data}>
                            <img src={image[0]} alt=""/>
                            <p>{item.titleRu}</p>
                            <h3>${item.price_amd}</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Data;