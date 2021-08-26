import logo from './logo.svg';
import './App.css';
import Header from '../src/Layout/Header';
import {BrowserRouter,Route} from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import AddProduct from './Product/AddProduct';
import UpdateProduct from './Product/UpdateProduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <h1>Ecom </h1>
      <Route path="/addProduct"><AddProduct/></Route>
      <Route path="/updateProduct"><UpdateProduct/></Route>
      <Route path="/login"><Login/></Route>
      <Route path="/register"><Register/></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
