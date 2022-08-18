import React from "react";
import "./buttons.css";
import Userinputs from "./Userinputs";
function reducer(state, { type, payload }) {
  console.log(state);
  return {
    ...state,
  };
}

const Buttons = () => {
  const [{ letter }, dispatch] = React.useReducer(reducer, {});
  return (
    <div className="button-container">
      <button
        type="button"
        className="btn"
        onClick={() => dispatch({ type: "add_letter", payload: "a" })}
      >
        a
      </button>
      <button type="button" className="btn">
        b
      </button>
      <button type="button" className="btn">
        c
      </button>
      <button type="button" className="btn">
        d
      </button>
      <button type="button" className="btn">
        e
      </button>
      <button type="button" className="btn">
        f
      </button>
      <button type="button" className="btn">
        g
      </button>
      <button type="button" className="btn">
        h
      </button>
      <button type="button" className="btn">
        i
      </button>
      <button type="button" className="btn">
        j
      </button>
      <button type="button" className="btn">
        k
      </button>
      <button type="button" className="btn">
        l
      </button>
      <button type="button" className="btn">
        m
      </button>
      <button type="button" className="btn">
        n
      </button>
      <button type="button" className="btn">
        o
      </button>
      <button type="button" className="btn">
        p
      </button>
      <button type="button" className="btn">
        q
      </button>
      <button type="button" className="btn">
        r
      </button>
      <button type="button" className="btn">
        s
      </button>
      <button type="button" className="btn">
        t
      </button>
      <button type="button" className="btn">
        u
      </button>
      <button type="button" className="btn">
        v
      </button>
      <button type="button" className="btn">
        w
      </button>
      <button type="button" className="btn">
        x
      </button>
      <button type="button" className="btn">
        y
      </button>
      <button type="button" className="btn">
        z
      </button>
    </div>
  );
};

export default Buttons;
