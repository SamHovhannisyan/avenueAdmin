import React, {useState} from 'react';
import Header from "../Containers/Header";
import Footer from "../Containers/Footer";
import Offcanvass from "../Components/Offcanvas/Offcanvas";

const Layout = ({children}) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Header handleShow={handleShow}/>
            <div>
                <Offcanvass show={show} setShow={setShow}/>
                {children}
            </div>
            <Footer/>

        </>
    )
}

export default Layout;