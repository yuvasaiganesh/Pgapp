import { useNavigate} from "react-router-dom";
import {useState, useContext} from "react"
import Header from "../Header"
import "./index.css"
import { Contextdata } from "../../context/FirstContext";

const Pglist=[ {
    id:1,
    name:"Sai Pg",
    address:"Kphb,Hyderabad"

},
{
    id:2,
    name:"Kushi's Comforts Pg",
    address:"Kundanahalli,Benguloor"


},
{
    id:3,
    name:"7G's Pg",
    address:"whitefield,Benguloor"

},
{
    id:4,
    name:"Elite Pg",
    address:"Hitech-city,Hyderabad"

},
{
    id:5,
    name:"Anand's Pg",
    address:"Miyapur,Hyderabad"

},
{
    id:6,
    name:"Space star's Pg",
    address:"Hitech-city,Hyderabad"
},



]



const Pgnames=()=>{
  
const [data]= useState({data:useContext(Contextdata)})



let navigate = useNavigate();

  const openPg=(item)=>{
    data.data.updateId(item)
    
    navigate("/details");
  }

  

    return(

    <div className="pgSection">
      <Header/>
        <h1 className="pgHeading">Select the Home for You</h1>
        <div className="allPgs">
        {Pglist.map((each,index)=>{
           
            return(
                <button key={index} onClick={()=>openPg(each.id)} className="eachPg">
                  <p className="pgName">{each.name}</p>
                  <p className="pgAddress">{each.address}</p>
                    </button>
            )})
        }
        
        
  
      </div>
      
    </div>
  
  )
};

export default Pgnames