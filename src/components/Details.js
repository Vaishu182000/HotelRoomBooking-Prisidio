import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import AdminDetails from './AdminDetails';
class RenderList extends React.Component {
  
  render() {
    return ( 
        <div>
                <Typography variant="h2" align="center" color="textPrimary" >
                    Welcome To Rush2Rooms
                </Typography>
                <Typography variant="h6" align="center" color="textPrimary" >
                    Customers who have booked their room so far
                </Typography>
                <AdminDetails/>
                </div>
    );
  }
}

export default RenderList;