import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{

                const {id,title,img,price,company,info,inCart} = value.details;

                   return(
                       <div className="container">
                           <div className="full-block">
                                <div className="row"> 
                                    <div className="col-lg-5 col-md-5 col-sm-6 col-12">
                                        <div className="full-img-container">
                                            <img src={img} className="img-fluid"/>
                                        </div>
                                    </div>

                                    <div className="col-lg-7 col-md-7 col-sm-6 col-12">
                                            <h4 className="title">{title}</h4>
                                            <h5 className="company">Made By : {company}</h5>
                                            <h4 className="price">Rs  {price} </h4>
                                            <p className="info-title">Some info about Product:- </p>
                                            <h4 className="info">{info}</h4>


                                        <div className="btn-container">
                                            <button
                                                className="detail-btn"
                                                disabled={inCart ? true : false}
                                                onClick={()=>{
                                                    value.addToCart(id);
                                                }}>

                                                {inCart ? <p className="text-Capitalize m-0" disabled>InCart</p>
                                                        : 
                                                        <span className="d-flex">
                                                           <ShoppingCartIcon fontSize="small"></ShoppingCartIcon>

                                                         <p className="m-0 ml-2">Add to Cart</p>
                                                        </span>   } 
                                            </button>

                                            <Link to='/'>
                                            <button className="detail-btn back">Back to Product</button>
                                            </Link>
                                        </div>    
                                    </div>
                                </div>  
                           </div>
                       </div>
                   );

                }}
            </ProductConsumer>
        )
    }
}
