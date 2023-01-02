import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import {FaStar,FaThumbsUp,FaTrashAlt} from "react-icons/fa"
// import { ArrowRight } from 'react-bootstrap-icons';
import "./product.style.css"
class Product extends React.Component {
  
  constructor(props){
    super(props)
    this.state={currentLikes: this.props.productdetails.likes};
    
  }
  increment(){
    console.log(this.props.productdetails.id)
    console.log(this.state.currentLikes)
    this.setState({currentLikes:this.state.currentLikes+1})
  }
  render() {
    // return <div className="product">
    //   <img src={this.props.productdetails.img} alt="mobile images"></img>
    //   <div>{this.props.productdetails.title}</div> 
    //   <div>{this.props.productdetails.likes}</div>
    //   <div>{this.props.productdetails.price}</div> 
    //   <div>{this.props.productdetails.rating}</div>

    // </div>
    let rating=[];
    for(let i=0;i< this.props.productdetails.rating;i++){
      rating.push(<FaStar key={i} color="orange"/>)
    }

    
    
    return (
              <div className="card m-2" >
                <img src={this.props.productdetails.img} className="card-img-top" alt="mobile images"  height="80%"/>
                <div className="card-body">
                  <h5 className="card-title">{this.props.productdetails.title}</h5>
                  <p className="card-text" >Price : {this.props.productdetails.price} <br></br> Rating : {rating}</p>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-primary" onClick={()=>this.increment()}><FaThumbsUp/>{this.state.currentLikes}</button>
                    <button className="btn btn-danger " onClick={()=>this.props.deleteProduct(this.props.productdetails.id)}><FaTrashAlt/></button>

                  </div>
                </div>
              </div>
            )

    
     
    
            
    


  }
}

export default Product;


