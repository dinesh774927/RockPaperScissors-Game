import React from 'react'

const GameContext = React.createContext({
  score: 0,
  selectOption: () => {},
  playAgain: () => {},
})

export default GameContext
