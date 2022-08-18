import React,{useReducer} from 'react'
import Buttons from './Buttons'
import "./userinputs.css"
function reducer(state,{type,payload}){
  console.log("log")
  switch(type){
    case "add-letter":
      return{
        ...state,
        word:state.word+payload
      }
  }
    
}
const Userinputs = () => {
  const[{word,quection,counter},dispatch]=useReducer(reducer,{})
  return (
   <div>
     <div className="counter">
       {counter}
     </div>
    <span className='userinput-container1'>
      {quection}
    </span>
    <input className='userinput-container2'>
      {word}
    </input>
    </div>
  )
}

export default Userinputs
