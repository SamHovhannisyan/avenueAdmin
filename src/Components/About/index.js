import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import css from './about.module.css';

const About = () => {
    return (
        <div className={css.aboutMain}>

            <Container>
                <Row>
                    <Col lg={12} md={12} xs={12}>
                        <div className={css.aboutDiv}>
                        <form>
                            <div className={css.aboutText}>
                                <h1>About</h1>
                            </div>
                            <div className={css.formDiv}>
                                <label htmlFor="w3review">Review of W3Schools:</label>

                                <textarea id="w3review" name="w3review" rows="4" cols="50">

                                </textarea>
                            </div>
                        </form>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default About;