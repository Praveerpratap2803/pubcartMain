//import logo from './logo.svg';
import './App.css';

import React from "react"
//import Product from "../product/product";
import ProductList from "../productlist/productlist";
import "bootstrap/dist/css/bootstrap.min.css"
export default class App extends React.Component{

  // productList = [
  //   {id:"1",title:"A",likes:100,rating:3,price:"Rs 100",img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662655662/Croma%20Assets/Communication/Mobiles/Images/261979_oq7vjv.png/mxw_640,f_auto"},
  //   {id:"2",title:"B",likes:100,rating:3,price:"Rs 100"},
  //   {id:"3",title:"C",likes:100,rating:3,price:"Rs 100"},
  //   {id:"4",title:"D",likes:100,rating:3,price:"Rs 100"},
  //   {id:"5",title:"E",likes:100,rating:3,price:"Rs 100"},
  // ]
  render() {

    // let allProducts = productList.map(product=> <Product productdetails={product}/>)
    // return(
    //   <div className="d-flex flex-wrap justify-content-evenly " >
    //   {allProducts}
    //   </div>

    // )
    return(
      <ProductList/>
    )
  }
}
