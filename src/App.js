import React from 'react';
import './App.css';
import Name from './components/name';
import fire from './components/firebase';
import Login from './components/Login';
import Book from './components/Book';
import AdminLogin from './components/AdminLogin';
import AdminHome from './components/AdminHome';
import CustomerDetails from './components/CustomerDetails'
import Details from './components/Details';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      user:{}
    }
  }
  componentDidMount(){
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user})
      }
      else{
        this.setState({user:null})
      }
    })
  }
  render(){
    return(
      <Router>
      <div>
      <Switch>
        <Route exact path="/">
          {this.state.user?(<Name/>):(<Login/>)}
            </Route>
            <Route exact path="/AdminLogin">
            {this.state.user?(<AdminHome/>):(<AdminLogin/>)}
            </Route>
          <Route path="/Book">
            <Book/>
          </Route>
          <Route path="/AdminLogin">
            <AdminLogin/>
          </Route>
          <Route path="/Details">
            <Details/>
          </Route>
          <Route path="/CustomerDetails">
            <CustomerDetails/>
          </Route>
      </Switch>
      </div>
      </Router>
    );
  }
}
export default App;
