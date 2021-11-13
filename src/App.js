import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import AllCars from './Pages/AllCars/AllCars';
// import Navigation from './Pages/Shared/Navigation/Navigation';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashbaord/Dashbaord/Dashboard';
import BuyNow from './Pages/BuyNow/BuyNow';
import UpdateStatus from './Pages/Dashbaord/AdminDashboard/UpdateStatus/UpdateStatus';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          {/* <Navigation></Navigation> */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/allCars">
              <AllCars />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/buyNow/:id">
              <BuyNow />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            {/* <Route path="/addNewCars">
              <AddNewCars />
            </Route> */}
            {/* <Route path="/manageCars">
              <ManageCars />
            </Route> */}
            <Route path="/updateStatus/:id">
              <UpdateStatus />
            </Route>

            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
