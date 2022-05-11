import React, {useEffect, useState} from 'react';
import css from './product.module.css';
import {Col, Container, Row, Pagination, Modal, Button, Tabs, Tab} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {createProduct, productGet, updateProduct} from "../../Redux/actions/shop.actions";
import ProductItem from "../ProductItem";
import axios from 'axios';

const Product = () => {

    const [page, setPage] = useState(1)
    const [productData, setProductData] = useState({});
    const [filterProductData, setFilterProductData] = useState({});
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    // const [files, setFiles] = useState([])
    const data = useSelector(state => state.productReducers.product)
    const pageCount = useSelector(state => state.productReducers.pageCount)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productGet(1))
    }, [])

    let paginateHandler = (number) => {
        dispatch(productGet(number))
        setPage(number)
    }

    let paginateButtons = pageCount.map(number => {
        return (
            <Pagination.Item key={number}
                             active={number + 1 === page}
                             onClick={() => paginateHandler(number + 1)}
            >
                {number + 1}
            </Pagination.Item>
        )
    })

    const handleChange = (e) => {
        productData[e.target.name] = e.target.value;
        // productData.append(e.target.name, e.target.value)
        console.log(productData, 'productData')
        setProductData(productData)
    }

    const handleFilterChange = (e) => {
        filterProductData[e.target.name] = e.target.value;
        console.log(filterProductData, 'productData')
        setFilterProductData(filterProductData)
    }

    const uploadImageInput = (event) => {
        const files = [];
        Object.keys(event.target.files).map((f) => {
            if (f === 'Length') return;
            files.push(event.target.files[f]);
        })
        uploadImage(files);
    };

    let arrImages = [];

    const uploadImage = (files) => {
        files.forEach(file => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "qtfygrwo");
            axios.post("https://api.cloudinary.com/v1_1/dxlsyddqs/image/upload",
                formData)
                .then((res) => {
                    arrImages.push(res.data.url);
                    productData['images'] = arrImages
                    setProductData(productData);
                    console.log(res.data.url);
                });
        })
    };

    const addClick = e => {
        e.preventDefault();
        dispatch(createProduct(productData));
        showModalHandler(false);
    }


    const addClick2 = e => {
        console.log(filterProductData,'filterProductData cccc')
        e.preventDefault()
        dispatch(updateProduct(filterProductData))
        showModalHandler(false)
    }


    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-end">
                        <div className={css.closeModalbtn}>
                            <span onClick={props.onHide}>x</span>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={css.formDiv}>
                        <div className={css.uploadImageDiv}>
                            <input id="myinput" type="file" onChange={uploadImageInput}
                                   accept="image/png, image/jpeg" multiple hidden/>
                            <label className={css.uploadImages} htmlFor="myinput">Upload Image</label>
                            <span>
                                {productData.images !== undefined ?
                                    <span>x{productData.images.length}</span>
                                    : null}
                            </span>
                        </div>
                        <form onChange={handleChange}>
                            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="home" title="Arm">
                                    <input type="text" placeholder={"Arm"} name='titleHy'/>
                                </Tab>
                                <Tab eventKey="profile" title="Ru">
                                    <input type="text" placeholder={"Ru"} name='titleRu'/>
                                </Tab>
                                <Tab eventKey="contact" title="En">
                                    <input type="text" placeholder={"En"} name='titleEn'/>
                                </Tab>
                            </Tabs>
                            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="home" title="Amd">
                                    <input type="number" placeholder={'Amd'} name='price_amd'/>
                                </Tab>
                                <Tab eventKey="profile" title="Usd">
                                    <input type="number" placeholder={"Usd"} name='price_usd'/>
                                </Tab>
                                <Tab eventKey="contact" title="Eur">
                                    <input type="number" placeholder={"Eur"} name='price_eur'/>
                                </Tab>
                                <Tab eventKey="contact2" title="Rub">
                                    <input type="number" placeholder={"Rub"} name='price_rub'/>
                                </Tab>
                            </Tabs>

                            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="home" title="availabilityHy">
                                    <input type="text" placeholder={"availabilityHy"} name='availabilityHy'/>
                                </Tab>
                                <Tab eventKey="profile" title="availabilityRu">
                                    <input type="text" placeholder={"availabilityRu"} name='availabilityRu'/>
                                </Tab>
                                <Tab eventKey="contact" title="availabilityEn">
                                    <input type="text" placeholder={"availabilityEn"} name='availabilityEn'/>
                                </Tab>
                            </Tabs>

                        </form>


                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={addClick}>Add</Button>
                </Modal.Footer>
            </Modal>
        );
    }


    let showModalHandler = bool => {
        setModalShow(bool)
    }
    const [el, setEl] = useState()
    const editProduct = (id) => {
        setEl(data?.filter((item) => item.id == id)[0]);
        console.log(filterProductData,'el   sss')
        setModalShow2(true);
        filterProductData['id'] = id;
        setFilterProductData(filterProductData);
        MyVerticallyCenteredModal2(el);
    }

    function MyVerticallyCenteredModal2(props) {
        console.log(el, 'props')
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-end">
                        <div className={css.closeModalbtn}>
                            <span onClick={props.onHide}>x</span>
                            {props.titleHy}
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={css.formDiv}>
                        <div className={css.uploadImageDiv}>
                            <input id="myinput" type="file" onChange={uploadImageInput}
                                   accept="image/png, image/jpeg" multiple hidden/>
                            <label className={css.uploadImages} htmlFor="myinput">Change Image</label>
                            <span>
                                {productData.images !== undefined ?
                                    <span>x{productData.images.length}</span>
                                    : null}
                            </span>
                        </div>
                        <form onChange={handleFilterChange}>
                            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="home" title="Arm">
                                    <input type="text" placeholder={"Ru"} defaultValue={el?.titleHy} name='titleHy'/>
                                </Tab>
                                <Tab eventKey="profile" title="Ru">
                                    <input type="text" placeholder={"Ru"} defaultValue={el?.titleRu} name='titleRu'/>
                                </Tab>
                                <Tab eventKey="contact" title="En">
                                    <input type="text" placeholder={"En"} defaultValue={el?.titleEn} name='titleEn'/>
                                </Tab>
                            </Tabs>
                            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="home" title="Amd">
                                    <input type="number" placeholder={'Amd'} defaultValue={el?.price_amd}
                                           name='price_amd'/>
                                </Tab>
                                <Tab eventKey="profile" title="Usd">
                                    <input type="number" placeholder={"Usd"} defaultValue={el?.price_usd}
                                           name='price_usd'/>
                                </Tab>
                                <Tab eventKey="contact" title="Eur">
                                    <input type="number" placeholder={"Eur"} defaultValue={el?.price_eur}
                                           name='price_eur'/>
                                </Tab>
                                <Tab eventKey="contact2" title="Rub">
                                    <input type="number" placeholder={"Rub"} defaultValue={el?.price_rub}
                                           name='price_rub'/>
                                </Tab>
                            </Tabs>

                            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="home" title="availabilityHy">
                                    <input type="text" placeholder={"Arm"} defaultValue={el?.availabilityHy}
                                           name='ARM'/>
                                </Tab>
                                <Tab eventKey="profile" title="availabilityRu">
                                    <input type="text" placeholder={"Ru"} defaultValue={el?.availabilityRu}
                                           name='RU'/>
                                </Tab>
                                <Tab eventKey="contact" title="availabilityEn">
                                    <input type="text" placeholder={"EN"} defaultValue={el?.availabilityEn}
                                           name='EN'/>
                                </Tab>
                            </Tabs>

                        </form>


                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={addClick2}>Add</Button>
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
                            <h2>Product</h2>
                            <button onClick={() => showModalHandler(true)}>+ Add Product</button>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </div>
                    </Col>
                    <div className={css.dark}>
                        <Col lg={12} md={12} xs={12}>
                            <div className={css.dark}>

                                <div className={css.search}>
                                    <h3>Product List</h3>
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
                                        <th>Model</th>
                                        <th>Status</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        data && data.map((item) => {
                                            return (
                                                <ProductItem key={item.id} editProduct={editProduct} item={item}/>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                    </div>
                    <Col lg={12} md={12} xs={12}>
                        <div className={css.pagination}>
                            <Pagination>
                                {pageCount.length > 1 ? paginateButtons : null}
                            </Pagination>
                        </div>
                    </Col>
                </Row>


                <MyVerticallyCenteredModal2
                    show={modalShow2}
                    onHide={() => setModalShow2(false)}
                />
            </Container>
        </div>
    );
};

export default Product;