import React, {useEffect, useState} from 'react';
import css from './order.module.css'
import {useDispatch, useSelector} from "react-redux";
import {Col, Container, Row, Modal, Button} from "react-bootstrap";
import OrderItem from "../OrderItem";
import {ordersGet} from "../../Redux/actions/orders.actions";

const Orders = () => {


    const order = useSelector(state => state.ordersReducers.order);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ordersGet())
    }, []);

    return (
        <div>
            <div className={css.product}>
                <Container>
                    <Row className='pt-2 pb-5'>
                        <Col lg={12} md={12} xs={12}>
                            <div className={css.productHome}>
                                <h2>All Orders</h2>
                                <button>+ Add Order</button>
                            </div>
                        </Col>
                        <div className={css.dark}>
                            <Col lg={12} md={12} xs={12}>
                                <div className={css.dark}>

                                    <div className={css.search}>
                                        <h3>Orders List</h3>
                                        <div>
                                            <label htmlFor="cheese">Search:</label>
                                            <input type="text" name="cheese" id="cheese"/>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                            <Col lg={12} md={12} xs={12}>
                                <div className={css.dark}>

                                    <table className={css.table}>
                                        <thead>
                                        <tr className={css.tr}>
                                            <th>ProductName</th>
                                            <th>delivery_date</th>
                                            <th>delivery_time</th>
                                            <th>Status</th>
                                            <th>Total Count</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            order && order.map((item) => {
                                                return (
                                                    <OrderItem key={item.id} item={item}/>
                                                )
                                            })
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </Col>
                        </div>
                    </Row>


                </Container>
            </div>
        </div>
    );
};

export default Orders;