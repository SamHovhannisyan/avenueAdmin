import React, {useState} from 'react';
import {Container, Nav, Navbar, Dropdown} from "react-bootstrap";
import {AiOutlineMenu} from 'react-icons/ai';
import css from './header.module.css';
import {BsFillSunFill} from 'react-icons/bs';
import {BsMoon} from 'react-icons/bs';
import {IoNotificationsOutline} from "react-icons/io5";
import useFlag from '../../Images/useFlag.png'
import ReactFlagsSelect from "react-flags-select";
import Profile from '../../Images/logoProfile.jpg'

const Header = ({handleShow}) => {

    const [select, setSelect] = useState("SE");
    const onSelect = (code) => setSelect(code);

    const [dark, setDark] = useState(true)


    const handleDark = () => {
        setDark(!dark)
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href='/'>
                        <h2>Avenue</h2>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <i onClick={handleShow} className={css.menue}><AiOutlineMenu/></i>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <div className={css.icons}>
                                {
                                    dark ?
                                        <span onClick={handleDark} className={css.borderRight}><BsFillSunFill/></span> :
                                        <span className={css.borderRightll}><BsFillSunFill/></span>
                                }


                                {
                                    !dark ? <span onClick={handleDark} className={css.moon}><BsMoon/></span> :
                                        <span className={css.moonll}><BsMoon/></span>
                                }

                            </div>
                        </Nav>
                        <Nav>
                            <div className={css.notifaction}>
                                <span><IoNotificationsOutline/></span>
                            </div>
                        </Nav>
                        <Nav>
                            <div>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                        <div className={css.logoProfile}>
                                            <img src={Profile} alt=""/>
                                            <h5>John Doe</h5>
                                        </div>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu variant="dark">
                                        <Dropdown.Item href="#/action-2">Log Out</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;