import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Single from './images/Single.jpg';
import Double from './images/Double.jpg';
import Triple from './images/Triple.jpg';
import Quad from './images/Quad.jpg';
import Queen from './images/Queen.jpg';
import King from './images/King.jpg';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import BookValue from './BookValue';

export default function ContainedButtons() {
  return (
    <div>
        <Container>
            <Typography variant="h2" align="center" color="textPrimary" >
                Welcome To Rush2Rooms
            </Typography>
            <Grid style={{marginTop:50}} container>
            <Grid item xs={4}>
                <img src={Single}/>           
            </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h3">Single Rooms</Typography>
                        <Typography variant="h6">
                            A room assigned to one person. May have one or more beds.
                            The room size or area of Single Rooms are generally between 37 m² to 45 m².
                        </Typography>
                        <Button color="secondary">Rs. 2000</Button>
                    </Grid>
                </Grid>
                <Grid style={{marginTop:50}} container>
                <Grid item xs={8}>
                <Typography variant="h3">Double Rooms</Typography>
                        <Typography variant="h6">
                            A room assigned to two people. May have one or more beds.
                            The room size or area of Double Rooms are generally between 40 m² to 45 m².
                        </Typography>
                        <Button color="secondary">Rs. 2500</Button>
                    </Grid>
            <Grid item xs={4}>
                <img src={Double}/>           
            </Grid>
                </Grid>
                <Grid style={{marginTop:50}} container>
            <Grid item xs={4}>
                <img src={Triple}/>           
            </Grid>
                    <Grid item xs={8}>
                    <Typography variant="h3">Triple Rooms</Typography>
                        <Typography variant="h6">
                        A room that can accommodate three persons and has been fitted with three twin beds, one double bed and one twin bed or two double beds.
The room size or area of Triple Rooms are generally between 45 m² to 65 m².
                        </Typography>
                        <Button color="secondary">Rs. 3000</Button>
                    </Grid>
                </Grid>
                <Grid style={{marginTop:50}} container>
                <Grid item xs={8}>
                <Typography variant="h3">Quad Rooms</Typography>
                        <Typography variant="h6">
                        A room assigned to four people. May have two or more beds.
The room size or area of Quad Rooms are generally between 70 m² to 85 m².
                        </Typography>
                        <Button color="secondary">Rs. 3000</Button>
                    </Grid>
            <Grid item xs={4}>
                <img src={Quad}/>           
            </Grid>
                </Grid>
        <Grid style={{marginTop:50}} container>
            <Grid item xs={4}>
                <img src={Queen}/>           
            </Grid>
                    <Grid item xs={8}>
                    <Typography variant="h3">Queen Rooms</Typography>
                        <Typography variant="h6">
                        A room with a queen-sized bed. May be occupied by one or more people.
The room size or area of Queen Rooms are generally between 32 m² to 50 m².
                        </Typography>
                        <Button color="secondary">Rs. 3500</Button>
                    </Grid>
                </Grid>
                <Grid style={{marginTop:50}} container>
                <Grid item xs={8}>
                <Typography variant="h3">King Rooms</Typography>
                        <Typography variant="h6">
                        A room with a king-sized bed. May be occupied by one or more people.
The room size or area of King Rooms are generally between 32 m² to 50 m².
                        </Typography>
                        <Button color="secondary">Rs. 3500</Button>
                    </Grid>
            <Grid item xs={4}>
                <img src={King}/>           
            </Grid>
                </Grid>
        <BookValue/>
        </Container>
    </div>
  );
}
