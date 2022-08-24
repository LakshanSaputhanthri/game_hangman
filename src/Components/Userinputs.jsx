import React from "react";
import QandA from "./QandA.json";
import "./userinputs.css";

const Userinputs = (props) => {
  const state = props.state;
  const dispatch = props.dispatch;

  //console.log(state);
  return (
    <div>
      <div className="counter-1">{state.counter}</div>
      <div className={`result ${state.clz} `}>{state.result}</div>
      <span className="userinput-container1">
        {QandA[state.index].question}
      </span>
      <span className="userinput-container2" onChange={(e)=>dispatch({type:'check', payload:e.target.value})}>{state.word}</span>
      <div className="btna">
        <button onClick={() => dispatch({ type: "restart" })}>Restart</button>
        <button onClick={() => dispatch({ type: "next" })}>Next</button>
      </div>
    </div>
  );
};

export default Userinputs;
