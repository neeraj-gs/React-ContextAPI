//this is a counter context

import {createContext} from  'react'

export const CounterContext = createContext(null); //create a coutner context and we can also specify some default value

export const CounterProvider=(props)=>{
   return(
      <CounterContext.Provider>
         {props.children}
      </CounterContext.Provider>
   )
}
