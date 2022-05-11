import React, {useState} from 'react';
import {Offcanvas, Button} from "react-bootstrap";
import {AiOutlineClose} from 'react-icons/ai';
import css from './Offcanvass.module.css';
import {Link} from "react-router-dom";
import {HiClipboardList} from "react-icons/hi";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {HiOutlinePresentationChartBar} from "react-icons/hi";
import {FiUsers} from 'react-icons/fi';


const Offcanvass = ({show, setShow}) => {


    const handleClose = () => setShow(false);


    return (
        <div>
            <Offcanvas show={show}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><Link onClick={handleClose} to="/">Avenue</Link></Offcanvas.Title>
                    <span onClick={handleClose} className='close'><AiOutlineClose/></span>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>

                        <div>
                            <div className={css.iconsDiv}>
                                <Link onClick={handleClose}
                                      to="/dashbord"><span><HiOutlinePresentationChartBar/></span>Dashboard</Link>
                            </div>
                        </div>

                        <div className={css.APPLICATION}>
                            <h5>APPLICATION</h5>
                            <div className={css.divOne}>
                                <div className={css.iconsDiv}>
                                    <Link onClick={handleClose}
                                          to="/product"><span><HiClipboardList/></span>Product</Link>
                                </div>
                                <div className={css.iconsDiv}>
                                    <Link to="/order" onClick={handleClose}><span><AiOutlineShoppingCart/></span>Orders</Link>
                                </div>
                                <div className={css.iconsDiv}>
                                    <Link to="/customer" onClick={handleClose}><span><FiUsers/></span>Customer</Link>
                                </div>
                                <div className={css.iconsDiv}>
                                    <Link to="/contact" onClick={handleClose}><span><FiUsers/></span>Contact</Link>
                                </div>
                                <div className={css.iconsDiv}>
                                    <Link to="/about" onClick={handleClose}><span><FiUsers/></span>About</Link>
                                </div>
                            </div>
                        </div>


                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default Offcanvass;