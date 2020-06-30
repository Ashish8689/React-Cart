import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

export default function CartItem({item,value}) {

    const {id,img,title,price,total,company,count} = item;
    const {increment,decrement,removeItem} = value;

    return (
        <div className="container-fluid text-center mt-3">  
            <div className="row font-weight-bold">
                <div className="col-10 mx-auto col-lg-2">
                    <img src={img} style={{width:"50px"}} alt="Product-image"/>
                </div>
                <div className="col-10 mx-auto col-lg-2 my-auto">
                    {title}
                </div>
                <div className="col-10 mx-auto col-lg-2 my-auto">
                    <span className="d-lg-none">Price :</span>
                    {price}
                </div>
                
                <div className="col-10 mx-auto col-lg-2 my-auto">
                    <div className="btn d-flex justify-content-between">  
                        <Button variant="outlined" onClick={()=>{decrement(id)}}><RemoveIcon fontSize="small" ></RemoveIcon></Button>
                            <span>{count}</span>
                        <Button variant="outlined" onClick={()=>{increment(id)}}><AddIcon fontSize="small"></AddIcon></Button>
                    </div>
                </div>

                <div className="col-10 mx-auto col-lg-2 my-auto">
                    <i class="fa fa-lg fa-trash" style={{cursor:'pointer'}} onClick={()=>{removeItem(id)}}></i>
                </div>
                <div className="col-10 mx-auto col-lg-2 my-auto">
                    {total}
                </div>
            </div>
        </div>
    )
}
