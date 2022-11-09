import React from 'react'

export const ATTEMPT = 5;

function GuessWordAttempt({ noOfGuesses }) {

  console.log("noOfGuesses", noOfGuesses)
  return (
    <div className='attempt'>
      {Array.from(Array(ATTEMPT)).map((_, index) => {
        return <div key={index} className={`cross ${index < noOfGuesses ? 'active' : ''}`}>
          &#9932;
        </div>
      })}
    </div>
  )
}

export default GuessWordAttempt