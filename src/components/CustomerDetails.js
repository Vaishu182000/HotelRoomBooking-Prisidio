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

class RenderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    const db = fire.firestore();
        db.collection("HotelRoom")
        .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({ users: data });
      });
      
  }
  render() {
    const { users } = this.state;
    return ( 
        <div className="root">
      <h2>SS-Students</h2><br/>
          <Grid
              container
              spacing={4}
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
          >
              {users.map(user => (
                  <Grid item xs={12} sm={6} md={4}>
                      <Card>
                          
                          <CardContent>
                          <img src={user.Img} alt="unavailable"/>
                          <h5>{user.Student_Name}</h5>
                          <p>{user.Register_Number}</p>
                          <p>Date of Birth : {user.Date_of_Birth}</p>
                          <p>Contact number : {user.Mobile_No}</p>
                          <p>Email Id : {user.Email_Id}</p>
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