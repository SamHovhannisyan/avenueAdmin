import React, {useEffect, useState} from 'react';
import css from './customer.module.css';
import {Col, Container, Row, Modal, Button} from "react-bootstrap";
import CustomerItem from "../CustomerItem";
import {useDispatch, useSelector} from "react-redux";
import {userCreate, userGet, userDelete} from "../../Redux/actions/user.actions";

const Customer = () => {

    const user = useSelector(state => state.usersReducers.users);

    const [modalShow, setModalShow] = React.useState(false);

    const [userData, setUserData] = useState({});

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userGet())
    }, [])

    const handleCreate = (e) => {
        userData[e.target.name] = e.target.value;
        setUserData(userData)
    }

    const addClick = e => {
        e.preventDefault()
        dispatch(userCreate(userData))
        setModalShow(false)
    }

    const onDelete = id => {
        dispatch(userDelete(id))
    }

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Body>
                    <div className={css.formDiv}>
                        <form onChange={handleCreate} onSubmit={addClick}>
                            <input type="email" name='email'/>
                            <input type="text" name='role'/>
                            <input type="password" name='password'/>
                            <button type={'submit'}>Add</button>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <div className={css.product}>
            <Container>
                <Row className='pt-2 pb-5'>

                    <Col lg={12} md={12} xs={12}>
                        <div className={css.productHome}>
                            <h2>User</h2>
                            <button onClick={() => setModalShow(true)}>+ Add Customer</button>
                        </div>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </Col>
                    <div className={css.dark}>
                        <Col lg={12} md={12} xs={12}>
                            <div className={css.dark}>

                                <div className={css.search}>
                                    <h3>User List</h3>
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
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        user && user.map((item) => {
                                            return (
                                                <CustomerItem key={item.id}
                                                              item={item}
                                                              onDelete={onDelete}
                                                />
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
    );
};

export default Customer;