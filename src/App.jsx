import { useCallback, useEffect, useState } from 'react'
import './App.css'
import GuessWordAttempt from './GuessWordAttempt';
import GuessWords from './GuessWords';
import KeyboardLayout from './KeyboardLayout';
import Words from './wordsList.json'
import { ATTEMPT } from './GuessWordAttempt';

function App() {
  function getWord() {
    return Words[Math.floor(Math.random() * Words.length)]
  }

  const [wordToGuess, setWordToGuess] = useState(
    () => getWord()
  )


  const guessWordInit = wordToGuess.length > 6 ?
    [wordToGuess[0], wordToGuess[Math.floor(wordToGuess.length / 2)], wordToGuess[wordToGuess.length - 1]]
    : [wordToGuess[0], wordToGuess[wordToGuess.length - 1]];
  const [guessWords, setGuessWords] = useState(() => guessWordInit);
  let inCorrectWord = guessWords.filter(letter => !wordToGuess.includes(letter));

  const isLose = inCorrectWord.length >= ATTEMPT;
  const isWinner = wordToGuess.split("").every(letter => guessWords.includes(letter));

  const addGuessLetter = useCallback((letter) => {
    if (guessWords.includes(letter) || isLose || isWinner) return
        setGuessWords(preVal => [...preVal, letter])
    }, [guessWords])

  useEffect(() => {
    
    function handleEvent(e) {
      const key = e.key
      if(key.toLowerCase() === 'enter') window.location.reload()
      if (!key.match(/(^[a-z]$)/)) return
      e.preventDefault()
      addGuessLetter(key)
    }

    document.addEventListener('keypress', handleEvent)

    return () => {
      document.removeEventListener("keypress", handleEvent)
    }
  }, [guessWords, isLose, isWinner])


  return <div className="main">
    <h2>Guess The Word</h2>
    <p className="result">
      {isWinner && "Winner!!! Refresh to try again"}
      {isLose && "Nice Try! Refresh to try again"}
    </p>
    <GuessWordAttempt noOfGuesses={inCorrectWord.length} />
    <GuessWords guessWords={guessWords} wordToGuess={wordToGuess} />
    <div style={{ alignSelf: 'stretch' }}>
      <KeyboardLayout
        disabledKeyboard={isWinner || isLose}
        activeLetters={guessWords.filter(letter => wordToGuess.includes(letter))}
        inActiveLetters={inCorrectWord}
        addGuessLetter={addGuessLetter}
      />
    </div>
  </div>
}

export default App
