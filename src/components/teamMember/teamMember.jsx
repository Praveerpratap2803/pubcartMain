import React from "react";
import "./teamMember.css"
export default class TeamMember extends React.Component{
    render(){
        return(
            <div className="card m-2" >
                <div className="card-body d-flex justify-content-between">
                    <div ><img src={this.props.teamMember.img} alt="profile" width={"100%"} height={"60%"} className="pe-2 rounded-3"/></div>
                    <div className="card-content" >
                        <div className="fw-bold fs-2">{this.props.teamMember.name}</div>
                        <div className="fs-4">{this.props.teamMember.designation}</div>
                        <div className="fst-italic">{this.props.teamMember.email}</div>
                        <div className="fw-light" >{this.props.teamMember.description}</div>

                    </div>
                </div>
            </div>
        )
    }
}

// style={{width:"40%"}}
