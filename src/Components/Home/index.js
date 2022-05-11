import React, {useEffect} from 'react';
import css from './home.module.css';
import {Col, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {productGet} from "../../Redux/actions/shop.actions";
import Data from "../Data";
import User from "../User";
import {userGet} from "../../Redux/actions/user.actions";

const Home = () => {

    const data = useSelector(state => state.productReducers.product)

    const user = useSelector(state => state.usersReducers.users)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productGet(1))
        dispatch(userGet())
    }, [])


    return (
        <div className={css.home}>
            <Container>
                <Row>
                    <Col lg={8} md={12} xs={12}>
                        <div className={css.productHome}>
                            <div>
                                <h2>Users</h2>
                            </div>
                            <table className={css.table}>
                                <thead>
                                <tr className={css.tr}>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Date</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    user && user.map((item) => {
                                        return (
                                            <User key={item.id} item={item}/>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </Col>
                    <Col lg={4} md={12} xs={12}>
                        <div className={css.productHome}>
                            <div>
                                <h2>Product</h2>
                            </div>
                            {
                                data && data.map((item) => {
                                    return (
                                        <div>
                                            <Data key={item.id} item={item}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;