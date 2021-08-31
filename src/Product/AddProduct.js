import {Form,Button,Container} from 'react-bootstrap';
import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Header from '../Layout/Header';
function AddProduct(){
    
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [description,setDescription] = useState("");
    const [product_image,setProductImage] = useState("");
    const histroy = useHistory();

    async function AddProduct(){
        console.log("🚀 ~ file: AddProduct.js ~ line 29 ~ AddProduct ~ result", product_image)
        var formData = new FormData();
        formData.append("product_image",product_image);
        formData.append("name",name);
        formData.append("price",price);
        formData.append("description",description);

        let result  = await fetch("http://localhost:8000/api/addProduct",{
            method:"POST",
            body:formData
        })
        console.log("🚀 ~ file: AddProduct.js ~ line 25 ~ AddProduct ~ result", result)
    }
    return (
        <div>
            <Header/>
            <h1>AddProduct Page</h1>
            <div className="col-md-6 offset-md-3">
                <Container>
                    <Form autoComplete="off">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter price" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="textarea" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Enter description" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Product Image</Form.Label>
                            <Form.Control type="file"  onChange={(e)=>setProductImage(e.target.files[0])}  />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        
                        <Button variant="primary" onClick={AddProduct} >
                            Submit
                        </Button>
                    </Form>
                    </Container>
            </div>
        </div>
    )
}


export default AddProduct;