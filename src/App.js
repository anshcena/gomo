import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation ,  Content  } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        
        <Header className="header-color" title="G O M O" scroll>
            <Navigation>
               
                <Link to="/">Home</Link>
                <Link to="/takeride">TAKE A RIDE</Link>
                <Link to="/takedrive">RIDE WITH ME </Link>
                <Link to="/contact">contact</Link>
             </Navigation>
        </Header>
      
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
