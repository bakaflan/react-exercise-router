import React from 'react'
import { Link, Route } from 'react-router-dom'
import Product from './Product'

class Products extends React.Component {

    state = {
        products: [
               {
                "id": 1,
                "name": "Bicycle",
                "price": 30,
                "quantity": 15,
                "desc": "Bicycle is Good"
              },
                {
                "id": 2,
                "name": "TV",
                "price": 40,
                "quantity": 16,
                "desc": "TV is good"
              },
               {
                "id": 3,
                "name": "Pencil",
                "price": 50,
                "quantity": 17,
                "desc": "Pencil is good"
              }
        ]
    }

    render() {
        console.log(this.stateproducts)
        return <div className = 'products'>
            <h2>All Products</h2>
            {this.state.products.map( product => {
                var state ={
                    pathname: `products/${product.id}`,
                    state: product
                }
                return <Link key = {product.id} to = {state} productinfo = {product} className='product'>{product.name}</Link>
            })}
            <Route path = '/products/:id' component = {Product}></Route>
        </div>
    }
}

export default Products;