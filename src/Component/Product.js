import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import '../App.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default class Product extends Component {
    render() {
        const {id,title,img,price,inCart} = this.props.product;
        return (
            <ProductConsumer>
            {value =>(
              <div className="block">

                    <div className="img-container" onClick={()=>{value.handleDetail(id)}}>
                        <Link to="/Details">  
                           <img src={img} className="img-fluid" />
                        </Link>    
                    </div>
                    

                <div className="text">
                    <h2 className="title">{title}</h2>
                    <h4 className="price"><i class="fa fa-inr"></i>  {price}</h4>
                </div>

                    <button
                     className="cart-btn"
                     disabled={inCart ? true : false}
                     onClick={()=>{value.addToCart(id)}}>

                     {inCart ? <p className="text-Capitalize m-0" disabled>InCart</p>
                             : <ShoppingCartIcon fontSize="small"></ShoppingCartIcon>}    
                    </button>

                </div>
            )}
            </ProductConsumer>    
        )
    }
}
