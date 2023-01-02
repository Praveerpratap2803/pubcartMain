import React from "react";
import { AiOutlinePlusCircle,AiOutlineMinusCircle } from "react-icons/ai";
import{BiRupee} from "react-icons/bi"


export default class CartItem extends React.Component{
    
    state={ivalue:1}
      
    itemIncrement(id){
        console.log("incremented")
        console.log(id)
        if(this.state.ivalue>=1){
            this.setState({ivalue:this.state.ivalue+1})
        }
    }
    itemDecrement(id){
        console.log("decremented")
        console.log(id)
        if(this.state.ivalue>1){
            this.setState({ivalue:this.state.ivalue-1});
        }else if(this.state.ivalue<=1){
            this.setState({ivalue:this.state.ivalue});
        }
    }
    
    render(){
        
        return(
            // <div>{this.props.product.id}</div> 
            <div  className="p-2 m-2 border border-2 border-primary">
                <div className="d-flex " >
                    <div className="d-flex  justify-content-between"  >
                        <img src={this.props.product.img}  alt="productimg" width="30%" height="100%"/>
                        <div className="">
                            <h3 className="">{this.props.product.title}</h3>
                            <p className=""><span className="text-decoration-line-through text-secondary fs-6" >Rs {this.props.product.price+this.props.product.discount*this.state.ivalue}</span><span className="fw-bold fs-5" > <BiRupee/>{this.props.product.price}</span></p>
                            {/* <p className="">Discount - Rs {this.props.product.discount}</p> */}
                            
                        </div>    
                        <p className="">Delivery by {this.props.product.deliveryDate}</p>
                    </div>
                    
                </div>

                <div>
                    <button className="bg-white border-0" onClick={()=>{this.itemIncrement(this.props.product.id);this.props.priceIncrement(this.props.product.id,this.state.ivalue)}}><AiOutlinePlusCircle/></button>
                    <label htmlFor={this.props.product.id} aria-label="Enter the quantity"></label>
                    <input 
                        type="text"
                        style={{width:"25px",height:"20px"}}
                        id={this.props.product.id}
                        value={this.state.ivalue}
                        
                        
                    />
                    <button  className="bg-white border-0" onClick={()=>{this.itemDecrement(this.props.product.id);if(this.state.ivalue>1){this.props.priceDecrement(this.props.product.id,this.state.ivalue)}}}><AiOutlineMinusCircle/></button>
                    <button  className=" bg-white border-0 fw-bold" >SAVE FOR LATER</button>
                    <button  className="bg-white border-0 fw-bold" onClick={()=>this.props.removeBtn1(this.props.product.id)}>REMOVE</button>
                </div>
            </div>
        )
    }
}














