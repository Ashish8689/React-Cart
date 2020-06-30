import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../../App.css';

export default function CartTotal({value}) {

    const{cartTotal,cartTax,cartSubTotal,clearCart} = value;
    return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to='/'>
                            <div className="btn">
                            <Button variant="contained" color="secondary" onClick={()=>{clearCart()}}>clear cart</Button>
                            </div>
                        </Link>

                        <h5 className="mt-3">
                        <span className="text-title text-uppercase">
                            subtotal : 
                        </span>
                        {" "}
                        <strong><i class="fa fa-inr"></i>    {cartSubTotal}</strong>
                    </h5>

                    <h5>
                        <span className="text-title text-uppercase">
                            Tax : 
                        </span>
                        {" "}
                        <strong><i class="fa fa-inr"></i>    {cartTax}</strong>
                    </h5>

                    <h5 className="total">
                        <span className="text-title text-uppercase">
                            Total :
                        </span>
                        {" "}
                        <strong><i class="fa fa-inr"></i>    {cartTotal}</strong>
                    </h5>
                    </div>  
                </div>
            </div>
    )
}
