//this is a counter context

import {createContext,useState} from  'react'

export const CounterContext = createContext(null); //create a coutner context and we can also specify some default value
//anuthing inside value is accessible to all comoeonts
export const CounterProvider=(props)=>{
   const [count,setCount] = useState(0);
   return(
      <CounterContext.Provider value={{count}}>
         {props.children}
      </CounterContext.Provider>
   )
}
