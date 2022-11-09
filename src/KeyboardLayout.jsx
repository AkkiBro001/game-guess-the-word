import React from 'react'

const KEYS = Array.from(Array(26)).map((e, i) => i + 65).map((x) => String.fromCharCode(x))


function KeyboardLayout({activeLetters, inActiveLetters, addGuessLetter, disabledKeyboard}) {
  
  return (
    <div className="keybord">
    {KEYS.map((key, index) => {
      const isactive = activeLetters.includes(key.toLowerCase())
      const isinactive = inActiveLetters.includes(key.toLowerCase())
      return <button key={index} 
      onClick = {()=> addGuessLetter(key.toLowerCase())}
      className={`key ${isactive ? 'active' : ''} ${isinactive ? 'inactive': ''}`}
      disabled = {isactive || isinactive || disabledKeyboard}
      style={{cursor: isactive || isinactive || disabledKeyboard ? 'default' : 'pointer'}}
      >{key}</button>
      })}
    </div>
  )
}

export default KeyboardLayout