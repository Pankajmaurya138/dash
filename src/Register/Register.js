import {Form,Button,Container} from 'react-bootstrap';
import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Header from '../Layout/Header';
function Register(){

    useEffect(()=>{
        if(localStorage.getItem("user_info")){
            histroy.push("/addProduct");
        }
    },[])

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const histroy = useHistory();
    async function Register(){
        let userDetail = {email,name,password};
        let result=await fetch('http://localhost:8000/api/register',{
            method:"POST",
            headers:{'Content-Type':"application/json","Accept":"application/json"},
            body:JSON.stringify(userDetail)
        })
        result = await result.json();
        localStorage.setItem("user_info",JSON.stringify(result));
        histroy.push('/addProduct');
    }


    return (
        <div>
            <Header/>
            <h1>Register Page</h1>
            <div className="col-md-6 offset-md-3">
                <Container>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Names</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                        </Form.Group>
                        
                        <Button variant="primary" onClick={Register}>
                            Submit
                        </Button>
                    </Form>
                    </Container>
            </div>
        </div>
    )
}


export default Register;