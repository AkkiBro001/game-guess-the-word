import React, { useEffect, useState } from 'react'

export const ATTEMPT = 5;

function GuessWordAttempt({ noOfGuesses }) {
  return (
    <div className="attempt">
      {Array.from(Array(ATTEMPT)).map((_, index) => {
        return <div key={index} className={`cross ${index < noOfGuesses ? 'active shake' : ''}`}>
        X
        </div>
      })}
    </div>
  )
}

export default GuessWordAttempt