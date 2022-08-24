import React from "react";
import "./hangman.css";

const Hangman = (props) => {
  const state = props.state;
  return (
    <div>
      <div className="container">
        <div className="tree"></div>
        <div className="tree--top"></div>
        <div className="tree--branch"></div>
        <div className="cable"></div>
        <div className={`hangman--head--${state.counter}`} key={1}></div>
        <div className={`hangman--body--${state.counter}`} key={2}></div>
        <div className={`hangman--left--hand--${state.counter}`} key={3}></div>
        <div className={`hangman--right--hand--${state.counter}`} key={4}></div>
        <div className={`hangman--left--leg--${state.counter}`} key={5}></div>
        <div className={`hangman--right--leg--${state.counter}`} key={6}></div>
      </div>
    </div>
  );
};

export default Hangman;
