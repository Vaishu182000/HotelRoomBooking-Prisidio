import React,{ Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import fire from './firebase';
import room1 from './images/room1.jpg';
import room2 from './images/room2.jpg';
import room3 from './images/room3.jpg';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { CardActionArea } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Book from './Book';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";


class name extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    logout(){
        fire.auth().signOut();
    }
    render(){
        return(
            <React.Fragment> 
                <div style={{textAlign:"right"}}>
                    <Button onClick={this.logout} variant="outlined" color="secondary">Logout</Button>
                </div>
                <Typography variant="h2" align="center" color="textPrimary" >
                    Welcome To Rush2Rooms
                </Typography> <br/>
                <Typography variant="h6" align="center" color="textPrimary" >
                    Discover a hotel that defines a new dimensions of luxury
                </Typography> <br/>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea>
                            <CardMedia
                                            component="img"
                                            alt="CSE"
                                            height="200"
                                            image={room1}
                                            title="CSE"
                                            />
                            <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                LUXURY DELUXE ROOM
                                            </Typography>
                                            <Typography varient="p">
                                            Deluxe rooms, are modern decorated, can accommodate up to 2 persons, totally soundproofed and equipped with high tech comforts such as high speed internet access, USB ports , smart TV, room cleaning touch system and private hydromassage bathtub.
                                            </Typography>
                                            <Divider/>
                                            <Button color="secondary">At Rs:3000 per day</Button>
                                            </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea>
                            <CardMedia
                                            component="img"
                                            alt="CSE"
                                            height="200"
                                            image={room2}
                                            title="CSE"
                                            />
                            <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                DOUBLE BEDROOM
                                            </Typography>
                                            <Typography varient="p">
                                            Double rooms, are modern decorated, can accommodate up to 2 persons, totally soundproofed and equipped with high tech comforts such as high speed internet access, USB ports , smart TV, room cleaning touch system and private hydromassage bathtub.
                                            </Typography>
                                            <Divider/>
                                            <Button color="secondary">At Rs:2500 per day</Button>
                                            </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea>
                            <CardMedia
                                            component="img"
                                            alt="CSE"
                                            height="200"
                                            image={room3}
                                            title="CSE"
                                            />
                            <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                QUEEN SIZED BEDROOM
                                            </Typography>
                                            <Typography varient="p">
                                            Queen Sized bedrooms, are modern decorated, can accommodate up to 3 persons, totally soundproofed and equipped with high tech comforts such as high speed internet access, USB ports , smart TV, room cleaning touch system and private hydromassage bathtub.
                                            </Typography>
                                            <Divider/>
                                            <Button color="secondary">At Rs:4000 per day</Button>
                                            </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                <Container style={{textAlign:"center", marginTop:50, marginBottom:50}}>
                            <Link to="/Book">
                                <Button variant="contained" size="large" color="secondary" renderAs="button">
                                    Book Room<ArrowForwardIcon/>
                                </Button>
                            </Link>
                </Container>
            </React.Fragment>
        );
    }
}

export default name;