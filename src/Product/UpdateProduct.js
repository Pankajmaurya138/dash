import {Form,Button,Container} from 'react-bootstrap';
import {useHistory,withRouter} from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import Header from '../Layout/Header';
import Obj from '../config';
function UpdateProduct(props){
    const [data,setproductDetail] = useState([]);
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [description,setDescription] = useState("");
    const [product_image,setProductImage] = useState("");
    let history = useHistory();
    useEffect( async()=>{
        let result = await fetch(Obj.API_URL+"productDetail/" + props.match.params.id)
        result = await result.json();
        setproductDetail(result.data);
        setName(result.data.name);
        setPrice(result.data.price);
        setDescription(result.data.description);
        setProductImage(result.data.product_image);
        
    },[]);
    async function UpdateProduct(id){
        
        var formData = new FormData();
        formData.append("product_image",product_image);
        formData.append("name",name);
        formData.append("price",price);
        formData.append("description",description);

        let result  = await fetch("http://localhost:8000/api/updateProduct/"+id+"?_method=PUT",{
            method:"POST",
            body:formData
        })
        history.push("/");
       alert("Product has been updated");
    }

    return (
        <div>
            <Header/>
            <h1> Update Product Page</h1>
            <div className="col-md-6 offset-md-3">
                <Container>
                    <Form autoComplete="off">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" onChange={(e)=>setName(e.target.value)} defaultValue={data.name} placeholder="Enter name" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" onChange={(e)=>setPrice(e.target.value)} defaultValue={data.price}  placeholder="Enter price" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="textarea" onChange={(e)=>setDescription(e.target.value)} defaultValue={data.description}  placeholder="Enter description" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Product Image</Form.Label>
                            <Form.Control type="file" onChange={(e)=>setProductImage(e.target.files[0])} name="product_image" defaultValue={data.image}  />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            
                            <img  src={Obj.IMG_URL+data.image} width={"100px"} height={"100px"}   />
                           
                        </Form.Group>
                        
                        <Button variant="primary" onClick={()=>UpdateProduct(data.id)} >
                            Update Product
                        </Button>
                    </Form>
                    </Container>
            </div>

        </div>
    )
}


export default withRouter(UpdateProduct);