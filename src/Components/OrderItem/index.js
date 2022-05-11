import React from 'react';
import css from './orderItem.module.css';
import {FiEdit2} from "react-icons/fi";
import {MdDeleteOutline} from "react-icons/md";
import {Modal, Button} from 'react-bootstrap';
import axios from "axios";

const OrderItem = ({item}) => {

    console.log(item, '----------------')

    const [modalShow, setModalShow] = React.useState(false);

    const totalPrice = item.products.map((item) => item.quantity).reduce((a, b) => a + b)

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div>
                        <table className={css.table}>
                            <tr className={css.trOne}>
                                <td>Product Img</td>
                                <td>Product Name</td>
                                <td>Model</td>
                                <td>Price</td>
                                <td>Quantity</td>
                            </tr>
                            {
                                item.products && item.products.map((item) => {
                                    return (
                                        <tr className={css.tr}>
                                            <td><img src={item.product.productImg} alt=""/></td>
                                            <td>{item.product.productName}</td>
                                            <td>{item.product.model}</td>
                                            <td>{item.product.price}</td>
                                            <td>x{item.quantity}</td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    axios.get('http://localhost:5000/api/v1/orders/')
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });

    return (
        <tr key={item.id} className={css.tr}>
            <>
                <td className={css.td1}>
                    <div className={css.td1Img}>
                        <button onClick={() => setModalShow(true)}>Click</button>
                    </div>
                </td>
                <td className={css.td1}><h5>{item.delivery_date}</h5></td>
                <td className={css.td1}><h5>{item.delivery_time}</h5></td>
                <td>
                    <div className={css.tdFlex}>
                        {
                            item.status == true ? <div className={css.onlineTrue}/> : <div className={css.onlineFalse}/>
                        }
                        <div>{item.status == true ? <h6>true</h6> : <h6>false</h6>}</div>
                    </div>
                </td>
                <td><h5>{totalPrice}</h5></td>
                <td>
                    <div className={css.edite}>
                        <span><FiEdit2/></span>
                        <span className={css.delete}><MdDeleteOutline/></span>
                    </div>
                </td>
            </>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </tr>

    );
};

export default OrderItem;