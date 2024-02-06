// import logo from './logo.svg';
// import './App.css';
import Navbar from './Component/Navbar';
// import { ProductcontextProvider } from './Context/roduct-context';
import Home from './Pages/Home';
import Login from './Pages/Login';
import ProductList from './Pages/ProductList';
import ProductPage from './Pages/ProductPage';
import Register from './Pages/Register';
import { ProductcontextProvider } from './Context/product-context';
import Cart from './Pages/Cart';
import {Routes,Route} from "react-router-dom";
import ProtectedRoutes from './Services/ProtectedRoutes';


function App() {
  return (
    <div>
    <ProductcontextProvider>
      {/* <Home/> */}
      {/* <ProductList/> */}
      {/* <ProductPage/> */}
      {/* <Navbar/> */}
      <Routes>
     {/* <Home/> */}
     
      <Route path="/" element={<ProtectedRoutes/>}>
       <Route path='/' element={<Home/>}/>
       </Route>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* <Route path='/productlist' element={<ProductList/>}/> */}
        <Route path='/ShopCart' element={<Cart/>}/>
      </Routes>
      {/* <Register/> */}
    </ProductcontextProvider>
    </div>
  );
}

export default App;
