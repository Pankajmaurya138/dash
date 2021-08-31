import React,{useState,useEffect} from 'react'
import Header from '../Layout/Header'
import {Table} from 'react-bootstrap';
import Obj from '../config';
import {Link} from 'react-router-dom';

export default function ProductList() {

    const [productList, setProductListData] = useState([]);
   
    
    useEffect(()=>{
        getData();
    },[])
  
async function deleteProduct(id){
   let result =await fetch(Obj.API_URL+'deleteProduct/'+id,{method:"DELETE"});
    result = await result.json();
    getData();
}

async function getData(){
    let result = await fetch(Obj.API_URL+"getProduct");
    result = await result.json();
    setProductListData(result.data);
}



    return (
        <div>
            <Header/>
            <h1>Product List</h1>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                
                {
                    
                    productList.map((item)=>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td><img src={"http://localhost:8000/product_image/"+item.image} width="100px" height="100px"/></td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td>
                             <span> <Link  className={"btn btn-success"} to={"updateProduct/"+item.id}>Edit</Link> <a onClick={()=>deleteProduct(item.id)} className={"btn btn-danger"}>Delete</a></span></td>
                        </tr>
                    )
                }
                
            </tbody>
            </Table>
        </div>
    )
}
