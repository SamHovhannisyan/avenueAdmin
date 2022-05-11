import React from 'react';
import Layout from "./lay/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Orders from "./Components/Order/order";
import Product from "./Components/Product";
import Home from "./Components/Home";
import Customer from "./Components/Customer";
import Settings from "./Components/Settings";
import Contact from "./Components/Contact";
import About from "./Components/About";


function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" index element={<Layout> <Home/> </Layout>}/>
                    <Route path="/product" index element={<Layout> <Product/> </Layout>}/>
                    <Route path="/order" index element={<Layout> <Orders/>< /Layout>}/>
                    <Route path="/customer" index element={<Layout> <Customer/> </Layout>}/>
                    <Route path="/settings" index element={<Layout> <Settings/> </Layout>}/>
                    <Route path="/contact" index element={<Layout> <Contact/> </Layout>}/>
                    <Route path="/about" index element={<Layout> <About/> </Layout>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
