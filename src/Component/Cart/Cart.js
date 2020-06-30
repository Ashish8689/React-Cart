import React, { Component } from 'react';
import CartColumn from './CartColumn';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../Context';
import CartList from './CartList';
import CartTotal from './CartTotal';


export default class Cart extends Component {
    render() {
        return (
        <React.Fragment>
            <ProductConsumer>
              {value =>{
                  const {cart} = value;
                  if(cart.length > 0){
                      return (
                          <>
                        <CartColumn/>
                        <CartList value={value} />
                        <CartTotal value={value}/>
                      </>
                      )
                  }
                  else{
                      return <EmptyCart />
                  }
              }}
            </ProductConsumer>    
        </React.Fragment>
        )
    }
}
