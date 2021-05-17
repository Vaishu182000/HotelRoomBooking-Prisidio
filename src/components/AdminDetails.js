import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import  fire  from "./firebase";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import './Styles.css';

class RenderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      days:"days"
    };
  }

  componentDidMount() {
    const db = fire.firestore();
        db.collection("HotelRoom")
        .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
            const d={
                id:doc.id,
                ...doc.data(),
            }
            console.log(d);
            return d;
        });
        data.map(user=>{
            user.aadar=user.aadar.replaceAll(' ','-')
            console.log(user.aadar);
        });
        this.setState({ users: data });
      });
  }
  Delete(e){
    const db = fire.firestore();
    db.collection("HotelRoom").doc(e).delete().then(()=>{
        console.log("Deleted");
    });
    
  }
  render() {
    const { users } = this.state;
    return ( 
        <div className="root">
            <Grid
                container
                spacing={3}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                style={{marginTop:50}}
            >
                {users.map(user => (
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="card">  
                            <CardContent>
                            <p>Name: {user.name}</p>
                                <p>Phone No: {user.phone}</p>
                                <p>Email: {user.email}</p>
                                <p>Aadhar No: {user.aadar}</p>
                                <p>Address: {user.address}</p>
                                <p>Room Type: {user.rooms}</p>
                                <p>AC/Non AC: {user.ac}</p>
                                <p>No of Members: {user.members}</p>
                                <p>No of Days: {user.days}</p>
                                <p>Date of Accomadation: {user.this}</p>
                                <p>Check Out: {user.checkin}</p>
                                <button >Delete</button>
                            </CardContent>
                        </Card>
                     </Grid>
                ))}
            </Grid>
        </div>
    );
  }
}

export default RenderList;



