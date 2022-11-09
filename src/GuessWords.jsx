import React, { useState } from 'react'

function GuessWords({guessWords, wordToGuess, revelLetters}) {
  console.log(guessWords, wordToGuess)
  return (
    <div className="guessWord">
        {wordToGuess.split("").map((letter, index) => <span key={index} style={{borderBottom: '0.1em solid white'}}>
        <span style={{
          visibility: guessWords.includes(letter) || revelLetters ? 'visible' : 'hidden',
          color: !guessWords.includes(letter) && revelLetters ? 'red' : '#fff'
        }} className="words">
          {letter}

        </span>
        </span>)}
    </div>
  )
}

export default GuessWords