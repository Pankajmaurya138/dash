import React,{useState,useEffect} from 'react';
import {Form,Button,Container} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import Header from '../Layout/Header';
function Login(){
  
    useEffect(()=>{
        if(localStorage.getItem("user_info")){
            histroy.push("/addProduct");
        }
    },[]);

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const histroy = useHistory();
    async function UserLogin(){
        let userData = {email,password};
        let result = await  fetch('http://localhost:8000/api/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(userData),
        })
        result = await result.json();
        console.log("🚀 ~ file: Login.js ~ line 27 ~ UserLogin ~ result", result)
        
        localStorage.clear();
        if(result.data.name){
            localStorage.setItem("user_info",JSON.stringify(result));
            histroy.push('/addProduct');
        }else{
            histroy.push('/login');
        }
            
    }

   
    return (
        
        <div>
            <Header/>
            <h1>Login Page</h1>
            <div className="col-md-6 offset-md-3">
                <Container>
                    <Form>
                       
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                        </Form.Group>
                        
                        <Button variant="primary" onClick={UserLogin}>
                            Submit
                        </Button>
                    </Form>
                    </Container>
            </div>
        </div>
    )
}


export default Login;