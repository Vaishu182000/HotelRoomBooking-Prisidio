import React from 'react';
import './App.css';
import Name from './components/name';
import fire from './components/firebase';
import Login from './components/Login';
import Book from './components/Book';
import AdminLogin from './AdminLogin';
import AdminHome from './AdminHome';
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
          {this.state.user?(<AdminHome/>):(<AdminLogin/>)}
            </Route>
          <Route path="/AdminLogin">
          {this.state.user?(<AdminHome/>):(<AdminLogin/>)}
          </Route>
      </Switch>
      </div>
      </Router>
    );
  }
}
export default App;
