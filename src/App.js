import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import AllProducts from './Components/AllProducts/AllProducts';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import CheckOut from './Components/CheckOut/CheckOut';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Forgot from './Components/ForgotPassword/Forgot';
import VerifyCode from './Components/VerifyCode/VerifyCode';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/product' exact element={<AllProducts/>}/>
        <Route path='/product/:productId' exact element={<ProductDetail/>}/>
        <Route path='/cart' exact element={<Cart/>}/>
        <Route path='/checkout' exact element={<CheckOut/>}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/register' exact element={<Register/>}/>
        <Route path='/forgotPassword' exact element={<Forgot/>}/>
        <Route path='/verification' exact element={<VerifyCode/>}/>
        <Route path='*'>
         404 Not Found 
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
