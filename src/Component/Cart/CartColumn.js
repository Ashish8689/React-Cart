import React from 'react'

export default function CartColumn() {
    return (
        <div className="container-fluid text-center d-lg-block mt-5">
            <div className="row font-weight-bold">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Product</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Name of Product</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Total</p>
                </div>
            </div>
        </div>
    )
}
