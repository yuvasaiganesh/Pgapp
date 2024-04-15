import {  useNavigate } from "react-router-dom";
import {useContext,useEffect,useState} from "react"
import {Contextdata} from "../../context/FirstContext"
import "./index.css"

import 'reactjs-popup/dist/index.css';
import Header from "../Header";

const Pglist=[ {
    id:1,
    rooms:[{
    
    room:1,
    bed1:"ok",
    bed2:"ok",
    bed3:"ok",

},
{
    
    room:2,
    bed1:"ok",
    bed2:"ok",
    bed3:"notok",


},
{
    
    room:3,
    bed1:"notok",
    bed2:"ok",
    bed3:"notok",

},
{
    
    room:4,
    bed1:"ok",
    bed2:"notok",
    bed3:"notok",

},
{
    
    room:5,
    bed1:"ok",
    bed2:"notok",
    bed3:"ok",

},
{
   
    room:6,
    bed1:"notok",
    bed2:"notok",
    bed3:"notok",
},
{
    
    room:7,
    bed1:"notok",
    bed2:"ok",
    bed3:"notok",

},
{
   
    room:8,
    bed1:"ok",
    bed2:"ok",
    bed3:"ok",

},
{
    
    room:9,
    bed1:"ok",
    bed2:"ok",
    bed3:"notok",

},
{
    
    room:10,
    bed1:"ok",
    bed2:"notok",
    bed3:"notok",

},]},

{
    id:2,
    rooms:[{
    
    room:1,
    bed1:"notok",
    bed2:"notok",
    bed3:"notok",

},
{
    
    room:2,
    bed1:"ok",
    bed2:"ok",
    bed3:"notok",


},
{
    
    room:3,
    bed1:"notok",
    bed2:"ok",
    bed3:"notok",

},
{
    
    room:4,
    bed1:"ok",
    bed2:"notok",
    bed3:"notok",

},
{
    
    room:5,
    bed1:"ok",
    bed2:"notok",
    bed3:"ok",

},
{
   
    room:6,
    bed1:"notok",
    bed2:"notok",
    bed3:"ok",
},
{
    
    room:7,
    bed1:"notok",
    bed2:"ok",
    bed3:"notok",

},
{
   
    room:8,
    bed1:"ok",
    bed2:"ok",
    bed3:"ok",

},
{
    
    room:9,
    bed1:"ok",
    bed2:"ok",
    bed3:"notok",

},
{
    
    room:10,
    bed1:"notok",
    bed2:"ok",
    bed3:"ok",

},]}
, {
    id:3,
    rooms:[{
    
    room:1,
    bed1:"ok",
    bed2:"notok",
    bed3:"ok",

},
{
    
    room:2,
    bed1:"ok",
    bed2:"ok",
    bed3:"notok",


},
{
    
    room:3,
    bed1:"notok",
    bed2:"ok",
    bed3:"notok",

},
{
    
    room:4,
    bed1:"ok",
    bed2:"notok",
    bed3:"notok",

},
{
    
    room:5,
    bed1:"ok",
    bed2:"notok",
    bed3:"ok",

},
{
   
    room:6,
    bed1:"notok",
    bed2:"notok",
    bed3:"notok",
},
{
    
    room:7,
    bed1:"notok",
    bed2:"ok",
    bed3:"notok",

},
{
   
    room:8,
    bed1:"ok",
    bed2:"ok",
    bed3:"ok",

},
{
    
    room:9,
    bed1:"ok",
    bed2:"ok",
    bed3:"notok",

},
{
    
    room:10,
    bed1:"notok",
    bed2:"ok",
    bed3:"ok",

},]}
, {
    id:4,
    rooms:[{
    
    room:1,
    bed1:"notok",
    bed2:"ok",
    bed3:"notok",

},
{
    
    room:2,
    bed1:"ok",
    bed2:"ok",
    bed3:"notok",


},
{
    
    room:3,
    bed1:"notok",
    bed2:"ok",
    bed3:"notok",

},
{
    
    room:4,
    bed1:"ok",
    bed2:"notok",
    bed3:"notok",

},
{
    
    room:5,
    bed1:"ok",
    bed2:"notok",
    bed3:"ok",

},
{
   
    room:6,
    bed1:"notok",
    bed2:"notok",
    bed3:"notok",
},
{
    
    room:7,
    bed1:"notok",
    bed2:"ok",
    bed3:"notok",

},
{
   
    room:8,
    bed1:"ok",
    bed2:"ok",
    bed3:"ok",

},
{
    
    room:9,
    bed1:"ok",
    bed2:"ok",
    bed3:"notok",

},
{
    
    room:10,
    bed1:"notok",
    bed2:"ok",
    bed3:"ok",

},]}
, {
    id:5,
    rooms:[{
    
    room:1,
    bed1:"notok",
    bed2:"notok",
    bed3:"ok",

},
{
    
    room:2,
    bed1:"ok",
    bed2:"ok",
    bed3:"notok",


},
{
    
    room:3,
    bed1:"notok",
    bed2:"ok",
    bed3:"notok",

},
{
    
    room:4,
    bed1:"ok",
    bed2:"notok",
    bed3:"notok",

},
{
    
    room:5,
    bed1:"ok",
    bed2:"notok",
    bed3:"ok",

},
{
   
    room:6,
    bed1:"notok",
    bed2:"notok",
    bed3:"notok",
},
{
    
    room:7,
    bed1:"notok",
    bed2:"ok",
    bed3:"notok",

},
{
   
    room:8,
    bed1:"ok",
    bed2:"ok",
    bed3:"ok",

},
{
    
    room:9,
    bed1:"ok",
    bed2:"ok",
    bed3:"notok",

},
{
    
    room:10,
    bed1:"notok",
    bed2:"ok",
    bed3:"ok",

},]}
, {
    id:6,
    rooms:[{
    
    room:1,
    bed1:"ok",
    bed2:"ok",
    bed3:"notok",

},
{
    
    room:2,
    bed1:"ok",
    bed2:"ok",
    bed3:"notok",


},
{
    
    room:3,
    bed1:"notok",
    bed2:"ok",
    bed3:"notok",

},
{
    
    room:4,
    bed1:"ok",
    bed2:"notok",
    bed3:"notok",

},
{
    
    room:5,
    bed1:"ok",
    bed2:"notok",
    bed3:"ok",

},
{
   
    room:6,
    bed1:"notok",
    bed2:"notok",
    bed3:"notok",
},
{
    
    room:7,
    bed1:"notok",
    bed2:"ok",
    bed3:"notok",

},
{
   
    room:8,
    bed1:"ok",
    bed2:"ok",
    bed3:"ok",

},
{
    
    room:9,
    bed1:"ok",
    bed2:"ok",
    bed3:"notok",

},
{
    
    room:10,
    bed1:"notok",
    bed2:"ok",
    bed3:"ok",

},]}



]



const Details=() =>{
    const [initialList,setinitialList]= useState(Pglist[0])
    const [finalList,setfinalList]= useState(Pglist)
    const [firstSet,setFirstSet]= useState([])
    const [secondSet,setSecondSet]= useState([])
    const [thirdSet,setThirdSet]= useState([])
    
    
   

useEffect(()=>{getdetails(); changeStatus()},[firstSet,secondSet,thirdSet])

   const data=useContext(Contextdata)
   const getdetails=()=>{
        const updatePgList=finalList.filter(each=>each.id===data.id)
        setinitialList(updatePgList[0])
        

}
    

    const navigate=useNavigate()

    const toback=()=>{
        navigate("/")
}

    const first=(num)=>{
        let  updateSet

        
         let totalLength=firstSet.length+secondSet.length+thirdSet.length
       
        if (firstSet.includes(num) || totalLength===4){
              updateSet=firstSet.filter(each=>each!==num)
        }
    
        else{
          const room= initialList.rooms.filter((bed)=>bed.room===num)
         
          if (room[0].bed1==="ok"){
            updateSet=[...firstSet,num]
                    }
              
            else{
                updateSet=[...firstSet]
            }
            
        }
           
        
        
       setFirstSet(updateSet)
       
           
 }

 const second=(num)=>{
    let  updateSet

    
     let totalLength=firstSet.length+secondSet.length+thirdSet.length
   
    if (secondSet.includes(num) || totalLength===4){
          updateSet=secondSet.filter(each=>each!==num)
    }

    else{
      const room= initialList.rooms.filter((bed)=>bed.room===num)
     
      if (room[0].bed2==="ok"){
        updateSet=[...secondSet,num]
                }
          
        else{
            updateSet=[...secondSet]
        }
        
    }
       
    
    
   setSecondSet(updateSet)
   
       
}

const third=(num)=>{
    let  updateSet

    
     let totalLength=firstSet.length+secondSet.length+thirdSet.length
   
    if (thirdSet.includes(num) || totalLength===4){
          updateSet=thirdSet.filter(each=>each!==num)
    }

    else{
      const room= initialList.rooms.filter((bed)=>bed.room===num)
      
      if (room[0].bed3==="ok"){
        updateSet=[...thirdSet,num]
                }
          
        else{
           updateSet=[...thirdSet]
        
        }
        
    }
       
    
    
   setThirdSet(updateSet)
   
       
}


const  changeStatus=async()=> {

    const updateList=finalList.filter(each => each.id===initialList.id);
    
    const secondList=updateList[0].rooms.map(each=>{
     if (firstSet.includes(each.room) && (each.bed1==="ok" || each.bed1==="hold")){
         each.bed1="hold"
     }
     else if (each.bed1==="ok" || each.bed1==="hold"){
        each.bed1="ok"
     }

     else{
        each.bed1="notok"
     }


     if (secondSet.includes(each.room) && (each.bed2==="ok" || each.bed2==="hold")){
         each.bed2="hold"
     }
     else if (each.bed2==="ok" || each.bed2==="hold"){
        each.bed2="ok"
     }
     else{
        each.bed2="notok"
     }


     if (thirdSet.includes(each.room) && (each.bed3==="ok" || each.bed3==="hold")){
         each.bed3="hold"
     }
     else if (each.bed3==="ok" || each.bed3==="hold"){
        each.bed3="ok"
     }
     else{
        each.bed3="notok"
     }

     return each
 })
 
     const newList={"id":initialList.id,"rooms":[...secondList]}

     
     setfinalList([...finalList,newList])
     

 }



   
   const  confirmBeds=async()=> {

       const updateList=finalList.filter(each => each.id===initialList.id);
       console.log(updateList)
       const secondList=updateList[0].rooms.map(each=>{
        if (firstSet.includes(each.room)){
            each.bed1="notok"
        }
        if (secondSet.includes(each.room)){
            each.bed2="notok"
        }
        if (thirdSet.includes(each.room)){
            each.bed3="notok"
        }
        return each
    })
    console.log(secondList)
        const newList={"id":initialList.id,"rooms":[...secondList]}

        
        setfinalList([...finalList,newList])
        

    }

    

const toConfirm=()=>{

   
    confirmBeds()
        
    }


const availble=(item)=>{
        let name
      if (item==="ok"){
          name="availble";
          
      }
          
      else if (item==="notok") {
          name="Notavailble"
      }
  
       else{
              name="hold";
             
      }
      return name;
  }

const colors=(item)=>{
      let color
    if (item==="ok"){
        color="firstColor";
        
    }
        
    else if (item==="notok") {
        color="secondColor"
    }

     else{
            color="thirdColor";
           
    }
    return color;
}




    return(

    <div className="detailPage">
        <Header/>
        <h1 className="mainheading">Pick Your Bed</h1>
        <div className="roomSection">
        {initialList.rooms.map((each,index)=>{
            
           const color1=colors(each.bed1)
           const color2=colors(each.bed2)
           const color3=colors(each.bed3)

           const availble1=availble(each.bed1)
           const availble2=availble(each.bed2)
           const availble3=availble(each.bed3)
           
           return(
                <div key={index} className="eachRoom">
                    <h1 className="roomHeading">Room {each.room}</h1>
                    <div className="beds">
                    <button onClick={()=>first(each.room)} className={color1}>{availble1}</button>
                    <button onClick={()=>second(each.room)} className={color2}>{availble2}</button>
                    <button onClick={()=>third(each.room)} className={color3}>{availble3}</button>
                    </div>
                </div>
            )})
        }
        
        
  
      </div>
      <div>
      <button className="backButton" onClick={toConfirm}>Confirm</button>
  
      </div>
     
    </div>
  
  )
};

export default Details