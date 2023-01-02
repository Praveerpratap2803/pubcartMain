import React from "react";
import{BiRupee} from "react-icons/bi"
import CartItem from "./cartItem";
import "../cart/cart.css"

export default class Cart extends React.Component {
  state = {
    cartItems: [
      {
        id: 1,
        title: "iPhone 14 Pro Max",
        likes: 88,
        rating: 5,
        price: 139900,
        discount: 5000,
        img: "https://m.media-amazon.com/images/I/31O8D6p7sfL.jpg",
        deliveryDate: "Sun Oct 16",
        packagingFee:90,
        deliveryCharge:0,
        val:1,
      },
      {
        id: 2,
        title: "Redmi Note 11 PRO Plus",
        likes: 1696,
        rating: 4,
        price: 19998,
        discount: 1000,
        img: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1652260159.48421068.png",
        deliveryDate: "Sun Oct 17",
        packagingFee:30,
        deliveryCharge:0,
        val:1,
      },
      {
        id: 3,
        title: "Samsung galaxy s22 ultra",
        likes: 22,
        rating: 3,
        price: 118999,
        discount: 4000,
        img: "https://m.media-amazon.com/images/I/71PvHfU+pwL._SL1500_.jpg",
        deliveryDate: "Sun Oct 18",
        packagingFee:70,
        deliveryCharge:0,
        val:1,
      },
      {
        id: 4,
        title: "OnePlus 10 Pro ",
        likes: 20,
        rating: 2,
        price: 71990,
        discount: 3500,
        img: "https://m.media-amazon.com/images/I/61mIUCd-37L._SX679_.jpg",
        deliveryDate: "Sun Oct 19",
        packagingFee:60,
        deliveryCharge:0,
        val:1,
      },
      {
        id: 5,
        title: "Xiaomi 12 Pro 5G",
        likes: 59,
        rating: 1,
        price: 67999,
        discount: 1570,
        img: "https://m.media-amazon.com/images/I/71vNgTH3MzL._SX679_.jpg",
        deliveryDate: "Sun Oct 20",
        packagingFee:50,
        deliveryCharge:0,
        val:1,
      },
    ],
    
    
  };

  removeBtn(id) {
    console.log(id);
    let newItems1=this.state.cartItems;
    let product = newItems1.filter((item) => { for(let i=newItems1.id;i<newItems1.length;i++){newItems1[i].id--}  return item.id !== id});

    this.setState({ cartItems: product });
  }
  
  priceIncrement(id,val){
    console.log(id,val)
    let newItems=this.state.cartItems;
    //let len = this.state.cartItems.length;
    newItems.forEach((item)=>{
        if(id===item.id ){
            
            if(val<1){
                val=1
                newItems[id-1].val=1
            }
            const p=this.state.cartItems[id-1].price
            newItems[id-1].price=(p/val)* (val+1)
            newItems[id-1].val=val+1
        }
    })
    
    //const p=this.state.cartItems[id].price
    //newItems[id].price=(p/this.i)* (val+1)
    this.setState({cartItems:newItems})
    
  }
  priceDecrement(id,val){
    console.log(id,val)
    let newItems=this.state.cartItems;
    newItems.forEach((item)=>{
        if(id===item.id ){
            if(val>1){
                const p=this.state.cartItems[id-1].price
                newItems[id-1].price=(p/val)* (val-1)
                newItems[id-1].val=val-1
            }
            else{
                newItems[id].val=0
                val=0
            }
        }
    })
    
    //const p=this.state.cartItems[id-1].price
    //newItems[id-1].price=(p/this.i)* (val+1)
    this.setState({cartItems:newItems})
  }
  
  render() {
    let allCart = this.state.cartItems.map((item) => ( <CartItem product={item} removeBtn1={(id) => this.removeBtn(id)} key={item.id} priceIncrement={(id,val)=>this.priceIncrement(id,val)} priceDecrement={(id,val)=>this.priceDecrement(id,val)}/> ));
    
    let price = 0,discount = 0,packagingFee=0,count=0,deliveryCharge=0;
    for (let i = 0; i < this.state.cartItems.length; i++) {
      price += this.state.cartItems[i].price ;
      discount += this.state.cartItems[i].discount * (this.state.cartItems[i].val);
      packagingFee += this.state.cartItems[i].packagingFee * (this.state.cartItems[i].val);
      deliveryCharge += this.state.cartItems[i].deliveryCharge;
      count++;
    }
    console.log(deliveryCharge)
    if(deliveryCharge===0){
        deliveryCharge="Free"
    }
    let total = price - (discount) + packagingFee;
    console.log(this.val)
    return (
      <div>
        <h1>Cart Items</h1>

        <div className="cart-main">
          <div  className="cart-main-item">{allCart}</div>

          <div  className=" m-2 cart-main-price">
            <h3  className="text-secondary border-bottom">PRICE DETAILS</h3>
            <div className="clm d-flex justify-content-between"><div>Price ({count} Items)</div>  <div><BiRupee/>{price}</div></div>

            <div className="clm d-flex  justify-content-between"><div>Discount</div><div className="text-success"><BiRupee/>-{discount}</div>  </div>
            
            <div className="clm d-flex  justify-content-between"><div>Delivery Charges</div><div className="text-success">{deliveryCharge}</div> </div>

            <div className="clm d-flex  justify-content-between"><div>Secured Packaging Fee</div><div>{packagingFee}</div> </div>

            <div className="clm d-flex  justify-content-between fw-bold fs-5"><div >Total Amount</div><div><BiRupee/>{total}</div> </div>

            <div className="clm fw-bold text-success">You will save <BiRupee/>{discount-packagingFee} on this order</div>
          </div>
        </div>
      </div>
    );
  }
}
