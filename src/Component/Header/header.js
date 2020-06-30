import React from 'react';
import logo from '../../logo.png';
import {Link} from 'react-router-dom';
import './header.css';
import {ProductConsumer} from '../../Context';

const Header = () =>{
   return( 

        <React.Fragment>
            
                <nav className="nav">

                <Link to="../">
                    <div className="logo">
                        <img src={logo} />
                    </div>
                </Link>    

                    <div className="side-menu">
                        <ul className="nav-list">
                            <Link to="../Productlist"><li>Product</li></Link>
                        </ul>
                   </div>

                    <div className="cart">
                        <ProductConsumer>
                         {value=>{ 
                             return (  
                                <Link to="../Cart">
                                    <i className="fa fa-shopping-cart"></i>
                                <p className="total-cart-items">{value.cart.length}</p>
                                </Link>
                            );
                            }}
                        </ProductConsumer>
                    </div>

                </nav>

        </React.Fragment>
   );
}

export default Header;

