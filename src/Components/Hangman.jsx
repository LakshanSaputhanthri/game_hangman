import React from 'react'
import "./hangman.css"

const Hangman = () => {
  return (
    <div>
      <div className="container">
        <div className="tree"></div>
        <div className="tree--top"></div>
        <div className="tree--branch"></div>
        <div className="cable"></div>
        <div className="hangman--head" key={1}></div>
        <div className="hangman--body" key={2}></div>
        <div className="hangman--left--hand" key={3}></div>
        <div className="hangman--right--hand" key={4}></div>
        <div className="hangman--left--leg" key={5}></div>
        <div className="hangman--right--leg" key={6}></div>
      </div>
    </div>
  )
}

export default Hangman