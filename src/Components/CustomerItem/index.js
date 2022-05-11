import React from 'react';
import {MdDeleteOutline} from "react-icons/md";
import css from './customerItem.module.css';
import {Modal, Button} from 'react-bootstrap';

const CustomerItem = ({item, onDelete}) => {

    const [modalShow, setModalShow] = React.useState(false);

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <h2 className={css.textDelete}>Delete user?</h2>
                    <div className={css.yesNo}>
                        <button onClick={() => onDelete(item.id)}>Yes</button>
                        <button onClick={props.onHide}>No</button>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }

    return (
        <tr key={item.id} className={css.tr}>
            <>

                <td className={css.td1}><h5>{item.email}</h5></td>
                <td>
                    <div className={css.tdFlex}>
                        <h5>{item.role ? 'Admin' : 'User'}</h5>
                    </div>
                </td>
                <td>
                    <div className={css.edite}>
                        <span className={css.delete} onClick={() => setModalShow(true)}><MdDeleteOutline/></span>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </div>
                </td>
            </>
        </tr>
    );
};

export default CustomerItem;