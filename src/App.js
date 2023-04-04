import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import  ShopContextProvider  from "./context/shop-contex";
import './App.css';
import {Navbar} from "./components/Navbar";
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';



function App() {
  return (
    <div className="App"> 
    <ShopContextProvider>
    <Router>
      <Navbar />  {/*It will be present in all routes */}
      <Routes>
        <Route path="/" element={<Shop />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </Router> 
    </ShopContextProvider>
    </div>
  );
}

export default App;
