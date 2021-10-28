// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import MyOrders from './Pages/MyOrders/MyOrders';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import AddANewService from './Pages/AddANewService/AddANewService';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Login from './Pages/Authenticate/Login/Login';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/my_orders'>
            <MyOrders></MyOrders>
          </Route>
          <Route path='/manage_all_orders'>
            <ManageAllOrders></ManageAllOrders>
          </Route>
          <Route path='/add_new_service'>
            <AddANewService></AddANewService>
          </Route>
          <Route path='/place_orders'>
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
