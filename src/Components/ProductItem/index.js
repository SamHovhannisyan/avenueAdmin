import React from 'react';
import css from "../User/user.module.css";
import {FiEdit2} from 'react-icons/fi';
import {MdDeleteOutline} from 'react-icons/md'
import {productDelete} from "../../Redux/actions/shop.actions";
import {useDispatch, useSelector} from "react-redux";
import {Button, Modal, Tab, Tabs} from "react-bootstrap";

const ProductItem = ({item, editProduct}) => {

    const [modalShow, setModalShow] = React.useState(false);

    const data = useSelector(state => state.productReducers.product)

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(productDelete(id))
    }

    let img = JSON.parse(item.images)


    return (
        <tr key={item.id} className={css.tr}>
            <>
                <td className={css.td1}>
                    <div className={css.td1Img}>
                        <img src={img ? img[0] : null} alt=""/>
                        <h5>{item.titleHy}</h5>
                    </div>
                </td>
                <td className={css.td1}><h5>{item.model}</h5></td>
                <td>
                    <div className={css.tdFlex}>
                        {
                            item.status == true ? <div className={css.onlineTrue}/> : <div className={css.onlineFalse}/>
                        }
                        <div>{item.status == true ? <h6>true</h6> : <h6>false</h6>}</div>
                    </div>


                </td>
                <td><h5>${item.price_amd}</h5></td>
                <td>
                    <div className={css.edite}>
                        <span onClick={()=> editProduct(item.id)}><FiEdit2/></span>
                        <span className={css.delete} onClick={() => handleDelete(item.id)}><MdDeleteOutline/></span>
                    </div>
                </td>
            </>
        </tr>
    );
};

export default ProductItem;