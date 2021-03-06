import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
                <img
                    className="card-img-top mx-auto"
                    src={product.images[0].url} alt="test"
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                        <Link to={`/product/${product._id}`}>{product.name}</Link>
                    </h5>
                    {/* <div className="ratings ">
                        <span id="no_of_reviews">{product.description}</span>
                    </div>  */}
                    <p className="card-text mt-auto ">${(product.price).toFixed(2)}</p>
                    <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block mt-auto">View Item</Link>
                </div>
            </div>
        </div>
    )
}

export default Product
