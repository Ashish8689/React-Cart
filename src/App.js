import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route} from 'react-router-dom';
import Header from './Component/Header/header';
import Productlist from './Component/Productlist'
import Details from './Component/Details';
import Cart from './Component/Cart/Cart';
import Default from './Component/Default';

class App extends Component{

  render(){
   
    return(
      <React.Fragment>
        <Header />

        <Switch>
           <Route exact path="/" component={Productlist} />
           <Route path="/Productlist" component={Productlist}/>
           <Route path="/Details" component={Details}/>
           <Route path="/Cart" component={Cart}/>
           <Route component={Default}/>
        </Switch>
      
      </React.Fragment>
    )
  }
}

export default App;