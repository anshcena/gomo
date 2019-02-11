import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { Link } from 'react-router-dom';
class getstarted extends Component{
    render(){
    return(
        <Card shadow={0} style={{width: '512px', margin: 'auto'}} al>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
        <CardText>
           DRIVE A CAR
        </CardText>
        <CardActions border>
            <Button colored>
            <Link to="/takedrive">  GO--> </Link>
            </Button>
        </CardActions>
        

        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
       RIDE WITH SOMEONE
    </CardText>
    <CardActions border>
        <Button colored>
        <Link to="/takeride">GO--></Link>       
        </Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>

    </Card>





        



    
    )
}
}

export default getstarted;