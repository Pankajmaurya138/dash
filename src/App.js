import logo from './logo.svg';
import './App.css';
// import Header from '../src/Layout/Header';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import AddProduct from './Product/AddProduct';
import UpdateProduct from './Product/UpdateProduct';
import Protected from './Protected/Protected';
import ProductList from './Product/ProductList';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Header/> */}
      {/* <h1>Ecom </h1> */}
      <Route  path="/addProduct"><Protected Cmp={AddProduct}></Protected></Route>
      <Route path="/updateProduct/:id"><Protected Cmp={UpdateProduct}></Protected></Route>
      <Route exact path="/"><Protected Cmp={ProductList}></Protected></Route>
      <Route path="/login"><Login/></Route>
      <Route path="/register"><Register/></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
