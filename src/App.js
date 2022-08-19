import React, { useState } from 'react'
import './App.css'
import Square from './components/Square'

const App = () => {

  const [board, setBoard] = useState(["?", "?", "?", "?", "?", "?", "?", "?", "?"])

  const [emoji, setEmoji] = useState(["X", "X", "X", "X", "X", "X", "X", "X", "X"])

  const handleGamePlay = (index) => {
    if (board -1 === -1){
      
    }
    setBoard(emoji)
  
  }

  return(
  <>
    <h1>Treasure Hunt Game</h1>
    <div className="boardgame">
      {board.map((value, index) => {
        return (
          <Square value={value} index={index} handleGamePlay={handleGamePlay}/>
          
        )
      })}
    </div>
    
  </>
)
}
export default App
