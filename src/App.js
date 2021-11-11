import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import AllCars from './Pages/AllCars/AllCars';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashbaord/Dashbaord/Dashboard';
import BuyNow from './Pages/BuyNow/BuyNow';
// import AddReview from './Pages/Dashbaord/AddReview/AddReview';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
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
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            {/* <Route path="/dashboard/addReview">
              <AddReview />
            </Route> */}
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
