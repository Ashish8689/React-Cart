import React, { Component } from 'react';
import {StoreProduct,DetailProduct} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state={
        products:[],
        details:[],
        cart:[],
        cartSubTotal:0,
        cartTotal:0,
        cartTax:0
    }

    getItem = (id) =>{
       const product = this.state.products.find(item => item.id === id);
       return product;
    }

    componentDidMount(){
        this.setProducts();
        this.setdetails();
    }

    setProducts = () =>{
        let tempProduct = [];
        StoreProduct.forEach(item =>{
        const singleItem = {...item};
        tempProduct = [...tempProduct,singleItem];
    })
      this.setState({products:tempProduct});
    }

    setdetails = () =>{
        let tempdetail = [];
        DetailProduct.forEach(item =>{
        const singleItem = {...item};
        tempdetail = [...tempdetail,singleItem];
    })
      this.setState({details:tempdetail});
    }


    handleDetail = (id) =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return this.setState({details:product});
        });
    }



    addToCart = (id) =>{
        let tempProduct = [...this.state.products];
        const index = tempProduct.indexOf(this.getItem(id));
        const product = tempProduct[index];
        product.inCart = true;
        product.count = 1;
        const price =  product.price;
        product.total = price;
        this.setState(()=>{
            return{
            product:tempProduct,
            cart:[...this.state.cart,product]};
        },()=>{
           this.addTotal();
        })
    }
   
    increment = (id) =>{
        let tempcart = [...this.state.cart];
        const selectedProduct = tempcart.find(item => item.id === id)

        const index = tempcart.indexOf(selectedProduct);
        const product = tempcart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(()=>{return{cart:[...tempcart]}},
        ()=>{this.addTotal()})
    }

    decrement = (id) =>{
        let tempcart = [...this.state.cart];
        const selectedProduct = tempcart.find(item => item.id === id)

        const index = tempcart.indexOf(selectedProduct);
        const product = tempcart[index];
      
        if(product.count === 0){
            product.count = 0;
        }
        else{
            product.count = product.count - 1;
        }
        product.total = product.count * product.price;

        this.setState(()=>{return{cart:[...tempcart]}},
        ()=>{this.addTotal()})
    }

    removeItem = (id) =>{
        let tempproduct = [...this.state.products];
        let tempcart = [...this.state.cart];
        tempcart = tempcart.filter(item => item.id !== id);
        const index = tempproduct.indexOf(this.getItem(id));
        let removeproduct = tempproduct[index];
        removeproduct.inCart = false;
        removeproduct.count = 0;
        removeproduct.total = 0;

        this.setState(()=>{
            return{
                cart:[...tempcart],
                products:[...tempproduct]
            }
        },()=>{
            this.addTotal();
        })

    }


    clearCart = () =>{
        this.setState(()=>{
          return{  cart:[] }
        },()=>{
            this.setProducts();
            this.addTotal();
        })
    }

    addTotal = () =>{
        let subtotal = 0;
        this.state.cart.map(item => subtotal=subtotal+item.total);
        const temptax = subtotal * 0.01;
        const tax = parseFloat(temptax.toFixed(2));
        const total = subtotal + tax;
        this.setState(()=>{
            return{
                cartSubTotal:subtotal,
                cartTax:tax,
                cartTotal:total
            }
        })
    }


    render(){
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart
            }}>

               {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

