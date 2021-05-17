import React,{Component} from "react";
import Typography from '@material-ui/core/Typography';
import fire from "./firebase";
import Button from '@material-ui/core/Button';
import './Styles.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
class Login extends Component{
    constructor(props){
        super(props);
        this.login=this.login.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.signup=this.signup.bind(this);
        this.state={
            email:"",
            password:""
        }
    }
    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err)
        })
    }
    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err);
        })
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return(
            <div>
                <div style={{textAlign:"right"}}>
                <Link to="/AdminLogin">
                    <Button variant="outlined" color="secondary">Admin</Button>
                </Link>
                </div>
                <Typography variant="h4" align="center" color="textPrimary" >
                    Login / Sign Up
                </Typography> <br/>
                <form className="box">
                    <input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    onChange={this.handleChange}
                    value={this.state.email}
                    />
                    <input
                    name="password"
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    />
                    <button onClick={this.login}>Login</button>
                    <button onClick={this.signup}>Signup</button>
                </form>
            </div>
        )
    }
}
export default Login;