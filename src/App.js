import "./App.css";
import { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import ProductDetails from "./components/pages/ProductDetails";
import Cart from "./components/pages/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route exact path="/product/:id">
          <ProductDetails />
        </Route>
        <Route>
          <Cart exact path="/cart" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
