import React, { useState } from 'react'

function GuessWords({guessWords, wordToGuess}) {
  console.log(guessWords, wordToGuess)
  return (
    <div className="guessWord">
        {wordToGuess.split("").map((letter, index) => <span key={index} style={{borderBottom: '0.1em solid white'}}>
        <span style={{visibility: guessWords.includes(letter) ? 'visible' : 'hidden'}} className="words">
          {letter}
        </span>
        </span>)}
    </div>
  )
}

export default GuessWords