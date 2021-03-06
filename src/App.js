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
import PrivateRoute from './Pages/Authenticate/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';
import Shipping from './Pages/Shipping/Shipping';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/my_orders'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path='/manage_all_orders'>
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path='/add_new_service'>
              <AddANewService></AddANewService>
            </PrivateRoute>
            <PrivateRoute path='/place_order/:id'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path='/shipping'>
              <Shipping></Shipping>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
