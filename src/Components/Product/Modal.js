import React, {useState} from 'react'
import css from "./product.module.css";
import {Button} from "react-bootstrap";
import axios from "axios";

const Modal = (props) => {
    const [imageSelected, setImageSelected] = useState("");
    const [productData, setProductData] = useState({});

    const uploadImage = () => {
        const formData = new FormData();
        formData.append("file", imageSelected)
        formData.append("upload_preset", "qtfygrwo")

        axios.post("https://api.cloudinary.com/v1_1/dxlsyddqs/image/upload",
            formData)
            .then((res) => {
                console.log(res, 'res');
            });
    };

    const addClick = e => {
        e.preventDefault()
        // todoData['data'] = productData
        // setTodoData(todoData)
        // console.log(todoData)
        // dispatch(createProduct(todoData))
        // console.log(productData,'componenets')
        // dispatch(createProduct(productData))
        uploadImage();
    }

    const handleChange = (e) => {
        productData[e.target.name] = e.target.value;
        // productData.append(e.target.name, e.target.value)
        setProductData(productData)
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Body>
                <div className={css.formDiv}>
                    <form onChange={handleChange}>
                        <input type="text" name='titleHy'/>
                        <input type="text" name='titleRu'/>
                        <input type="text" name='titleEn'/>
                        <input type="text" name='price_amd'/>
                        <input type="text" name='price_usd'/>
                        <input type="text" name='price_eur'/>
                        <input type="text" name='price_rub'/>
                        <input type="text" name='availabilityHy'/>
                        <input type="text" name='availabilityRu'/>
                        <input type="text" name='availabilityEn'/>

                    </form>
                    <input type="file"
                           id="avatar"
                           name="images"
                           multiple
                           accept="image/png, image/jpeg"
                           onChange={(event) => setImageSelected(event.target.files[0])}
                    />
                    <button onClick={addClick}>Add</button>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => props.showModalHandler(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Modal