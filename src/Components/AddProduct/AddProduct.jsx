import React, { useRef, useState } from 'react'
import '../AddProduct/AddProduct.scss'
import Arrow from '../../Assets/arrow.svg'
import Context from '../../ContextAPI/Context';


const AddProduct = () => {

    const [sku, setSKU] = useState();
    const [name, setName] = useState();
    const [qty, setQty] = useState();
    const [desc, setDesc] = useState();
    const [files, setFiles] = useState();
    let fileObj;

    const inputRef = useRef(null);

    const handleSKU = (e) => {
        let s = e.target.value.trim();
        setSKU(s)
        console.log(s)
    }

    const handleName = (e) => {
        let n = e.target.value.trim();
        setName(n)
    }

    const handleQTY = (e) => {
        let q = e.target.value.trim();
        setQty(q)
    }

    const handleDesc = (e) => {
        let d = e.target.value.trim();
        setDesc(d)
    }

    const handleClick = () => {
        // 👇️ open file input box on click of other element
        inputRef.current.click();
    };

    const handleFileChange = event => {
         fileObj = event.target.files;


        if (!fileObj) {
            setFiles(fileObj);
            console.log(fileObj+'ffffffff')

            return;
        }

        console.log(fileObj)


    }



    return (
        <Context.Consumer>
            {(context) => (
                <div className='center'>
                    <div className='add-sub-container'>
                        <div className='title-container'>
                            <div className='main-ttle' >Products</div>
                            <div className='center'>
                                <img src={Arrow} className='arw-icon' />

                            </div>
                            <div className='sub-ttle center'> Add new Product</div>
                        </div>

                        <div className='form-container'>
                            <div className='dspl-flex center-v input-position'>
                                <div className='form-title'>SKU</div>
                                <div className='input-bgrd'>
                                    <input type='text'
                                        className='input-field'
                                        value={sku}
                                        onChange={(e) => {
                                            handleSKU(e)
                                        }} />
                                </div>

                            </div>

                            <div className=' input-position dspl-flex ' style={{ justifyContent: 'space-between' }}>
                                <div className=' side-by  '>
                                    <div className='form-title center-v'>Name</div>
                                    <div className='input-bgrd'>
                                        <input type='text'
                                            className='input-field'
                                            value={name}
                                            onChange={(e) => {
                                                handleName(e)
                                            }} />
                                    </div>
                                </div>

                                <div className=' side-by'>
                                    <div className='form-title center-v'>QTY</div>
                                    <div className='input-bgrd'>
                                        <input type='text'
                                            className='input-field'
                                            value={qty}
                                            onChange={(e) => {
                                                handleQTY(e)
                                            }} />
                                    </div>
                                </div>



                            </div>

                            <div className='input-position'>
                                <div className='form-title ' style={{ width: '200px' }}>Product Description</div>
                                <div className='input-margins'>A small description about the product</div>
                                <textarea
                                    className='textarea'
                                    onChange={(e) => {
                                        handleDesc(e)
                                    }}
                                />
                            </div>


                            <div className='input-position'>
                                <div className='dspl-flex'>
                                    <div>
                                        <div className='form-title ' style={{ width: '200px' }}>Product Images</div>
                                        <div className='input-margins'>JPEG, PNG, SVG or GIF</div>
                                        <div >(Maximum file size 50mb)</div>
                                        <input type='file'
                                            accept="image/x-png,image/jpeg"
                                            multiple ref={inputRef}
                                            onChange={handleFileChange}
                                            className='FileUpload'

                                        />
                                    </div>

                                    <div
                                        className='upload-txt'
                                        onClick={() => {
                                            handleClick()
                                        }}>Add Images</div>

                                </div>
                            </div>

                        </div>


                        <div style={{justifyContent:'flex-end', width:'100%', display:'flex'}}>
                            <div className='center add-btn'
                            
                            onClick={()=>{
                                context.addProduct(sku, name, qty, desc, fileObj)
                            }}
                            >
                                Add Product
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </Context.Consumer>
    )
}

export default AddProduct