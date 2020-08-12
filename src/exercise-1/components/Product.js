import React  from 'react';

class Product extends React.Component {
    
  render() {
      const productinfo = this.props.location.state;
      const pathname = this.props.location.pathname;
      console.log( this.props.location)
    return (        
      <div className="content">
          <br/>
          <h1>Product Details:</h1>
          <p>Name: {productinfo.Name} </p>
          <p>Id:  {productinfo.id}</p>
          <p>Price: {productinfo.price} </p>
          <p>Quantity: {productinfo.quantitiy} </p>
          <p>Desc: {productinfo.desc} </p>
          <p>URL:  {pathname}</p>
      </div>
    );
  }
}

export default Product;