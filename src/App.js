import './App.css';
import Navi from './component/Navi';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import Cart from './component/Cart';
import ProductDetails from './component/ProductDetails';
import { useEffect, useState } from 'react';
import Categoryproduct from './component/categoryproduct';
import Search from './component/search';
import Profile from './component/myProfile';


function App() {

  const [count, setcount] = useState(0);
  const [Product, setProduct] = useState()
  const [dataToCart, setdataToCart] = useState([])
  const [searchedTitle, setsearchedTitle] = useState("")
  const cart = [];


  const cartlist = (product) => {
    console.log([product], "--")
    cart.push(Product);
    console.log(cart);
    const uniqueproducts = [...new Set(cart)];
    setcount(uniqueproducts.length);
    // console.log(uniqueproducts);
    // setdataToCart(uniqueproducts);
    setdataToCart([product]);
  }

  useEffect(() => {

  }, [Product]);

  return (
    <div className="App">
      <BrowserRouter>

        <Navi setsearchedTitle={setsearchedTitle} count={count} />


        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/Categoryproduct" render={(() => { return <Categoryproduct cartlist={cartlist} /> })} />
          <Route exact path="/productDetails" render={(() => { return <ProductDetails searchedTitle={searchedTitle} /> })} />
          <Route exact path="/cart" render={(() => { return <Cart dataToCart={dataToCart} /> })} />
          <Route exact path="/Profile" component={Profile} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
