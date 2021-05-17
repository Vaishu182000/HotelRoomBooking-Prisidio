import React from 'react';
import { Typography } from '@material-ui/core';  
import fire from "./firebase";
import './Form.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import Name from './name';
import Login from './Login';

class BookValue extends React.Component { 
    constructor(props){
        super(props);
        this.book=this.book.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.state={
            name:"",
            email:"",
            phone:"",
            address:"",
            aadar:"",
            members:"",
            rooms:"",
            ac:"",
            date:"",
            days:"",
            amount:"",
            checkin:"No"
        }
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    book(e){
        e.preventDefault();
        console.log(this.state.rooms);
        if(this.state.rooms === "Single"){
            this.state.amount=parseFloat(this.state.days)*2000
        }
        else if(this.state.rooms==="Double"){
            this.state.amount=parseFloat(this.state.days)*2500
        }
        else if(this.state.rooms==="Triple"){
            this.state.amount=parseFloat(this.state.days)*3000
        }
        else if(this.state.rooms==="Quad"){
            this.state.amount=parseFloat(this.state.days)*3000
        }
        else if(this.state.rooms==="Queen"){
            this.state.amount=parseFloat(this.state.days)*3500
        }
        else if(this.state.rooms==="King"){
            this.state.amount=parseFloat(this.state.days)*3500
        }
        const db = fire.firestore();
        const userRef = db.collection("HotelRoom").add({
        name: this.state.name,
        email: this.state.email,
        phone:this.state.phone,
        address:this.state.address,
        aadar:this.state.aadar,
        members:this.state.members,
        rooms:this.state.rooms,
        ac:this.state.ac,
        this:this.state.date,
        days:this.state.days,
        amount:this.state.amount,
        checkin:this.state.checkin
        });
        alert("Thank You For Booking Your Room!  \nYour Name :" + this.state.name+"\nRoom Type :"+this.state.rooms+"\nAmount :"+this.state.amount+"\n\nHave a nice day!!");
    }
    render(){
        return(
            <div>
                <Typography variant="h2" align="center" color="textPrimary" style={{marginTop:50}}>
                    Book Your Room!
                </Typography> <br/>
                <fieldset>
                <form style={{textAlign:"center", marginBottom:50}}>
                <div className="content">
			<div className="form-group">
			<h3><label for="name">Name:</label></h3>
                    <input
                    name="name"
                    type="text"
                    id="name"
                    placeholder="Enter Name"
                    onChange={this.handleChange}
                    value={this.state.name}
                    />
			</div>		
			<div className="form-group">
			<h3><label for="name">Email:</label></h3>
                    <input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Enter Email"
                    onChange={this.handleChange}
                    value={this.state.email}
                    />
			</div>		
			<div className="form-group">
			<h3><label for="name">Phone Number:</label></h3>
                    <input
                    name="phone"
                    type="text"
                    id="phone"
                    placeholder="Enter Phone No"
                    onChange={this.handleChange}
                    value={this.state.phone}
                    />
			</div>		
			<div className="form-group">
			<h3><label for="name">Address:</label></h3>
                    <input
                    name="address"
                    type="text"
                    id="address"
                    placeholder="Enter Address"
                    onChange={this.handleChange}
                    value={this.state.address}
                    />
			</div>		
			<div className="form-group">
			<h3><label for="name">Aadhar Number:</label></h3>
                    <input
                    name="aadar"
                    type="text"
                    id="aadar"
                    placeholder="Enter Aadhar No"
                    onChange={this.handleChange}
                    value={this.state.aadar}
                    />
			</div>		
			<div className="form-group">
			<h3><label for="name">No of Members:</label></h3>
                    <input
                    name="members"
                    type="number"
                    id="members"
                    placeholder="Enter No of Members"
                    onChange={this.handleChange}
                    value={this.state.members}
                    />
			</div>		
			<div className="form-group">
			<h3><label for="name">AC / Non AC:</label></h3>
                    <input
                    name="ac"
                    type="text"
                    id="ac"
                    placeholder="AC / Non AC"
                    onChange={this.handleChange}
                    value={this.state.ac}
                    />
			</div>		
			<div className="form-group">
			<h3><label for="name">Types of Room:</label></h3>
                    <select id="rooms" name="rooms" onChange={this.handleChange} value={this.state.rooms}>
                        <option value="Single">Single Room</option>
                        <option value="Double">Double Room</option>
                        <option value="Triple">Triple Rooms</option>
                        <option value="Quad">Quad</option>
                        <option value="Queen">Queen</option>
                        <option value="King">King</option>
                    </select>
			</div>		
			<div className="form-group">
			<h3><label for="name">Date:</label></h3>
                    <input
                    name="date"
                    type="date"
                    id="date"
                    placeholder="Date of Accomidation"
                    onChange={this.handleChange}
                    value={this.state.date}
                    />
			</div>		
			<div className="form-group">
			<h3><label for="name">No of Days :</label></h3>
                     <input
                    name="days"
                    type="number"
                    id="days"
                    placeholder="No of Days of Accomidation"
                    onChange={this.handleChange}
                    value={this.state.days}
                    />
			</div>	
                <div className="submit">
                        <button type="reset" onClick={this.book}>Book</button>
                </div>
		</div>
                </form>
                </fieldset>
            </div>
        )
    }
}
export default BookValue;