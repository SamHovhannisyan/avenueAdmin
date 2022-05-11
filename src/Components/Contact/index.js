import React from 'react';
import css from './contact.module.css';
import {Button, Col, Container, Row} from "react-bootstrap";

const Contact = () => {
    return (
        <div className={css.contactMain}>

            <Container>
                <Row>
                    <Col lg={12} md={12} xs={12}>

                        <div className={css.contactDiv}>

                            <form>
                                <div className={css.contactText}>
                                    <h1>Contact</h1>
                                </div>
                                <div>
                                    <label htmlFor="mail">Email</label>
                                    <input type="email" id="email" name="fav_language" />
                                </div>
                                <div>
                                    <label htmlFor="phone">Phone</label>
                                    <input type="number" id="phone" name="fav_language" />
                                </div>
                                <div>
                                    <label htmlFor="address">Address</label>
                                    <input type="text" id="address" name="fav_language" />
                                </div>
                                <div>
                                    <label htmlFor="instagram">Instagram</label>
                                    <input type="text" id="instagram" name="fav_language" />
                                </div>
                                <div>
                                    <label htmlFor="facebook">Facebook</label>
                                    <input type="text" id="facebook" name="fav_language" />
                                </div>
                                    <Button type="submit">Submit</Button>
                            </form>
                        </div>

                    </Col>
                </Row>
            </Container>

        </div>
);
};

export default Contact;