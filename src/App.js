import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Hangman from "./Components/Hangman";
import Title from "./Components/Title";
import Buttons from "./Components/Buttons";
import Userinputs from "./Components/Userinputs";
import QandA from "./Components/QandA.json";

function reducer(state, { type, payload }) {
  //console.log(QandA[state.index].answer[5]);
  //console.log(state, type, payload, state.word);
  console.log(payload, "trtrtrt");
  switch (type) {
    case "check":
      return {
        ...state,
      };
    case "add_letter":
      //check input is correct
      if (QandA[state.index].answer === state.word) {
        return {
          ...state,
          result: "won",
          clz: "won",
        };
      }
      if (state.counter === 6) {
        return {
          ...state,
          result: "loss",
          clz: "loss",
        };
      }
      if (state.counter < 6) {
        //console.log(state.counter);
        if (QandA[state.index].answer[state.i] === payload) {
          return {
            ...state,
            word: state.word + payload,
            i: state.i + 1,
          };
        } else {
          return {
            ...state,
            counter: state.counter + 1,
          };
        }
      }
    case "restart":
      return {
        ...state,
        index: 0,
        counter: 0,
        word: "",
        result: "",
      };

    case "next":
      if (state.index + 1 < QandA.length) {
        return {
          ...state,
          index: state.index + 1,
          counter: 0,
          word: "",
          result: "",
        };
      } else {
        return {
          ...state,
        };
      }
      break;
    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    counter: 0,
    word: "",
    question: "",
    index: 0,
    i: 0,
    result: "",
  });
  return (
    <div className="App">
      <Title />
      <Hangman state={state} />
      <Buttons dispatch={dispatch} />
      <Userinputs state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
