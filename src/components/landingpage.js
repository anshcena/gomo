import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { Link } from 'react-router-dom';

class landingpage extends Component{
    render(){
    return(
       
        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
        <CardText>
            
            GOMO DAILY , Have a good Day !

        </CardText>
        <CardActions border>
            <Button colored>
            <Link to="/getstarted" >Get Started->  </Link>
           
            </Button> 
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
    </Card>
    
    
    
    )
}
}

export default landingpage;