import React from "react";
import TeamMember from "../teamMember/teamMember"
export default class Team extends React.Component{

    team=[
        {id:"1",img:"https://www.passionateinmarketing.com/wp-content/uploads/2022/01/6a876c26-3c8d-421b-bf13-decef3780eb3_Tesla-Elon-Musk.jpg",name:"Elon Musk",designation:"CEO of Tesla",email:"elonmusk@gmail.com",description:"Elon Reeve Musk FRS is a business magnate and investor. He is the founder, CEO, and chief engineer of SpaceX; angel investor, CEO, and product architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI"},
        {id:"2",img:"https://bl-i.thgim.com/public/incoming/w3o2dp/article65207081.ece/alternates/FREE_1200/PTI1_5_2017_000190A.JPEG-03d6a.jpg",name:"Sundar Pichai",designation:"CEO of Google",email:"sundarpichai@gmail.com",description:"Pichai Sundararajan, better known as Sundar Pichai, is an Indian-American business executive. He is the chief executive officer of Alphabet Inc. and its subsidiary Google. Born in Madurai, India, Pichai earned his degree from IIT Kharagpur in metallurgical engineering"},
        {id:"3",img:"https://image.cnbcfm.com/api/v1/image/102160051-RTR4AVSL.jpg?v=1562016694",name:"Satya Nadella",designation:"CEO of Microsoft",email:"satyanadella@gmail.com",description:"Elon Reeve Musk FRS is a business magnate and investor. He is the founder, CEO, and chief engineer of SpaceX; angel investor, CEO, and product architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI"},
        {id:"4",img:"https://inc42.com/wp-content/uploads/2017/04/flipkart.png",name:"Kalyan Krishnamurthy",designation:"CEO of Flipkart",email:"kalyankrishnamurthy@gmail.com",description:"Kalyan Krishnamurthy is the Group CEO of the Flipkart Group since 2018. As the Group CEO, Kalyan is responsible for driving growth and operations across the country with the vision to democratize e-commerce in India."},
        {id:"5",img:"https://s3images.zee5.com/wp-content/uploads/2021/11/PARAG.jpg",name:"Parag Agrawal",designation:"CEO of Twitter",email:"paragagrawal@gmail.com",description:"Parag Agrawal is an Indian-American software engineer who is the chief executive officer of Twitter, Inc"}
    ]

    

    render(){
        let allTeamMember=this.team.map((teamM)=> <TeamMember teamMember={teamM} key={teamM.id}/>)
        return (
            <div>
                <h1>Team 1</h1>
                <div className="d-flex flex-wrap justify-content-evenly">{allTeamMember}</div>
            </div>
        )

        
    }
}




