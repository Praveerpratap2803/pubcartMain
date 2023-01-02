//import logo from './logo.svg';
// import {BrowserRouter as Router,RouterProvider,Route,Switch,Link} from "react-router-dom"
import {
  BrowserRouter ,
  Routes,
  Route,
  
} from "react-router-dom";
import React from "react"

import ProductList from "../productlist/productlist";
import Navbar from "../navbar/navbar";
import Team from "../team/team"
import Login from '../login/login';
import Cart from "../cart/cart"

import './App.css';
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
    // const router = createBrowserRouter([
    //   {
    //     path:"/",
    //     element:<><Navbar/><Login/></>
    //   },
    //   {
    //     path:"/login",
    //     element:<><Navbar/><Login/></>
    //   },
    //   {
    //     path:"/productlist",
    //     element:<><Navbar/><ProductList/></>
    //   },
    //   {
    //     path:"/team",
    //     element:<><Navbar/><Team/></>
    //   }
    // ])
    return(
      <>
        {/* <ProductList/> */}
        {/* <Team/> */}
        {/* <Login/> */}
        {/* <RouterProvider router={router}/> */}
        
        <BrowserRouter>
          <Navbar/>
          <Routes>
            
            <Route  path="/" element={<Login/>}/>
              
            <Route  path="/productlist" element={<ProductList/>}/>
            
            <Route  path="/team" element={<Team/>}/>

            <Route path="/cart" element={<Cart/>}/>
              
          </Routes>
        </BrowserRouter>
        
      </>
    )
  }
}
