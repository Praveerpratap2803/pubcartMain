import React from "react"
import Product from "../product/product"
import "bootstrap/dist/css/bootstrap.min.css"

// let productList = [
//       {id:"1",title:"iPhone 14 Pro Max",likes:88,rating:4.8,price:"Rs 1,39,900",img:"https://m.media-amazon.com/images/I/31O8D6p7sfL.jpg"},
//       {id:"2",title:"Redmi Note 11 PRO Plus",likes:1696,rating:4.2,price:"Rs 19,998",img:"https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1652260159.48421068.png"},
//       {id:"3",title:"Samsung galaxy s22 ultra",likes:22,rating:4.3,price:"Rs 1,18,999",img:"https://m.media-amazon.com/images/I/71PvHfU+pwL._SL1500_.jpg"},
//       {id:"4",title:"OnePlus 10 Pro ",likes:20,rating:3.5,price:"Rs 71,990",img:"https://m.media-amazon.com/images/I/61mIUCd-37L._SX679_.jpg"},
//       {id:"5",title:"Xiaomi 12 Pro 5G",likes:59,rating:4.3,price:"Rs 67,999",img:"https://m.media-amazon.com/images/I/71vNgTH3MzL._SX679_.jpg"},
//     ]
//   export default productList

export default class ProductList extends React.Component{
  constructor(){
    super()
    this.state = {
      productList: [
        {id:"1",title:"iPhone 14 Pro Max",likes:88,rating:5,price:"Rs 1,39,900",img:"https://m.media-amazon.com/images/I/31O8D6p7sfL.jpg"},
        {id:"2",title:"Redmi Note 11 PRO Plus",likes:1696,rating:4,price:"Rs 19,998",img:"https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1652260159.48421068.png"},
        {id:"3",title:"Samsung galaxy s22 ultra",likes:22,rating:3,price:"Rs 1,18,999",img:"https://m.media-amazon.com/images/I/71PvHfU+pwL._SL1500_.jpg"},
        {id:"4",title:"OnePlus 10 Pro ",likes:20,rating:2,price:"Rs 71,990",img:"https://m.media-amazon.com/images/I/61mIUCd-37L._SX679_.jpg"},
        {id:"5",title:"Xiaomi 12 Pro 5G",likes:59,rating:1,price:"Rs 67,999",img:"https://m.media-amazon.com/images/I/71vNgTH3MzL._SX679_.jpg"},
      ]
    }
  }

  // productList = [
  //         {id:"1",title:"iPhone 14 Pro Max",likes:88,rating:5,price:"Rs 1,39,900",img:"https://m.media-amazon.com/images/I/31O8D6p7sfL.jpg"},
  //         {id:"2",title:"Redmi Note 11 PRO Plus",likes:1696,rating:4,price:"Rs 19,998",img:"https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1652260159.48421068.png"},
  //         {id:"3",title:"Samsung galaxy s22 ultra",likes:22,rating:3,price:"Rs 1,18,999",img:"https://m.media-amazon.com/images/I/71PvHfU+pwL._SL1500_.jpg"},
  //         {id:"4",title:"OnePlus 10 Pro ",likes:20,rating:2,price:"Rs 71,990",img:"https://m.media-amazon.com/images/I/61mIUCd-37L._SX679_.jpg"},
  //         {id:"5",title:"Xiaomi 12 Pro 5G",likes:59,rating:1,price:"Rs 67,999",img:"https://m.media-amazon.com/images/I/71vNgTH3MzL._SX679_.jpg"},
  //       ]

  // deleteUser(userId) {
  //   console.log(`Deleting User with id : ${userId}`);
  //   let newUsers = this.state.users.filter(u => u.id != userId);
  //   this.setState({ users: newUsers });
  // }
  deleteProduct(productId){
    console.log(`${productId}`)
    let newProducts = this.state.productList.filter(p => p.id !== productId)
    this.setState({ productList: newProducts });
  }
  render() {

    let allProducts = this.state.productList.map(product=> <Product productdetails={product}  deleteProduct={id =>this.deleteProduct(id)}/>)
    return(
      <div className="d-flex flex-wrap justify-content-evenly " >
      {allProducts}
      </div>

    )
    
  }


}
