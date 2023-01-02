import React from "react";
import "./login.css"
export default class Login extends React.Component{
    render(){
        return (
            <div  className="d-flex justify-content-center">
                <div className="d-flex justify-content-between m-3 border border-primary border-2" style={{width:"70%"}}>
                    <div style={{width:"33.5%"}} className="d-flex flex-column p-1 bg-primary text-white ">
                        <h1>Login</h1> 
                        <p>Get access to your Orders , Wishlist and Recommendations</p>
                        <img src="https://www.freeiconspng.com/uploads/blue-shopping-cart-icon-4.jpg" alt="pubkart img" width="100%" className="mt-auto"/>
                    </div>
                        <form className=" d-flex flex-column" style={{width:"66%",padding:"10px"}}>
                            <div className="col">
                                <label htmlFor="email" >Enter Email/Mobile number</label><br/>
                                <input type={"text"} className="inputText" id="email"/>
                                
                            </div>
                            <div className="col d-flex">
                                <label htmlFor="password" aria-label="Enter Password"></label>
                                <input type={"password"} placeholder="Enter Password" className="inputText" id="password"/>
                                <a href="/" className="fw-bold" style={{position:"absolute",right:"17%",textDecoration:"none"}}>Forgot?</a>
                            </div>
                            <div className="col fw-light">By continuing, you agree to pubcart's <a href="https://www.flipkart.com/pages/terms" className="fw-bold"> Term of Use </a> and <a href="https://www.flipkart.com/pages/privacypolicy" className="fw-bold"> Privacy Policy</a> </div>
                            <button type={"submit"} className="col" style={{"color":"white","backgroundColor":"orangered","border":"none","padding":"5px 0"}}>Login</button>
                            <div className="col" style={{"padding":"0 0 0 47%"}}>OR</div>
                            <button className="col" style={{color:"blue",backgroundColor:"white",border:"none",boxShadow:"2px 2px 2px 2px  rgb(209 209 209)",padding:"5px 0"}}>Request OTP</button>
                            <a href="https://www.flipkart.com/" className="col fw-bold">New to pubcart? Create an account</a>

                            
                        </form>
                    </div>
                </div>
            
        )
    }
}

// https://www.freeiconspng.com/uploads/blue-shopping-cart-icon-4.jpg

