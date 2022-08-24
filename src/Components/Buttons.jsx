import React from "react";
import "./buttons.css";


const Buttons = (props) => {
  const dispatch = props.dispatch;
  return (
    <div className="button-container">
      <button
        type="button"
        className="btn"
        onClick={() => dispatch({ type: "add_letter", payload: "a" })}
      >
        a
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch({ type: "add_letter", payload: "b" })}
      >
        b
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch({ type: "add_letter", payload: "c" })}
      >
        c
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch({ type: "add_letter", payload: "d" })}
      >
        d
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch({ type: "add_letter", payload: "e" })}
      >
        e
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch({ type: "add_letter", payload: "f" })}
      >
        f
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch({ type: "add_letter", payload: "g" })}
      >
        g
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch({ type: "add_letter", payload: "h" })}
      >
        h
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch({ type: "add_letter", payload: "i" })}
      >
        i
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch({ type: "add_letter", payload: "j" })}
      >
        j
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch({ type: "add_letter", payload: "k" })}
      >
        k
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch({ type: "add_letter", payload: "l" })}
      >
        l
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch({ type: "add_letter", payload: "m" })}
      >
        m
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch({ type: "add_letter", payload: "n" })}
      >
        n
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch({ type: "add_letter", payload: "o" })}
      >
        o
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch({ type: "add_letter", payload: "p" })}
      >
        p
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch({ type: "add_letter", payload: "q" })}
      >
        q
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch({ type: "add_letter", payload: "r" })}
      >
        r
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch({ type: "add_letter", payload: "s" })}
      >
        s
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch({ type: "add_letter", payload: "t" })}
      >
        t
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch({ type: "add_letter", payload: "u" })}
      >
        u
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch({ type: "add_letter", payload: "v" })}
      >
        v
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch({ type: "add_letter", payload: "w" })}
      >
        w
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch({ type: "add_letter", payload: "x" })}
      >
        x
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch({ type: "add_letter", payload: "y" })}
      >
        y
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => dispatch({ type: "add_letter", payload: "z" })}
      >
        z
      </button>
    </div>
  );
};

export default Buttons;
