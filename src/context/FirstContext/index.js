import React from "react"

const data={
    id:1,
    updateId:(item)=>{
        
        data.id=item;
        console.log(data)
        
        
       
    }
   
}

export const Contextdata=React.createContext()

export const WrappedContext=({children})=>{
    return(<Contextdata.Provider value={data}>{children}</Contextdata.Provider>)
}