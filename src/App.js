import {Component} from 'react'
import Header from './components/Header'
import GameContext from './Context/gameContext'
import Rules from './components/Rules'
import GameItem from './components/GameItem'
import Result from './components/Result'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    test: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    test: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    test: 'paperButton',
  },
]

class App extends Component {
  state = {score: 0, result: '', play: true}

  onSelection = name => {
    this.setState(prev => ({play: !prev.play}))
    const computer = Math.floor(Math.random() * 3)
    console.log(computer)
    const index = choicesList.findIndex(each => each.id === name)

    if (index === computer) {
      this.setState({
        result: {
          status: 'IT IS DRAW',
          you: choicesList[index],
          computer: choicesList[computer],
        },
      })
    } else if (
      (index === 0 && computer === 1) ||
      (index === 1 && computer === 2) ||
      (index === 2 && computer === 0)
    ) {
      this.setState(prev => ({
        result: {
          status: 'YOU WON',
          you: choicesList[index],
          computer: choicesList[computer],
        },
        score: prev.score + 1,
      }))
    } else {
      this.setState(prev => ({
        result: {
          status: 'YOU LOSE',
          you: choicesList[index],
          computer: choicesList[computer],
        },
        score: prev.score - 1,
      }))
    }
  }

  playAgain = () => {
    this.setState(prev => ({play: !prev.play}))
  }

  render() {
    const {score, play, result} = this.state
    return (
      <GameContext.Provider
        value={{
          score,
          selectOption: this.onSelection,
          playAgain: this.playAgain,
        }}
      >
        <div className="bgContainer">
          <Header />
          {play ? (
            <ul className="ul">
              {choicesList.map(each => (
                <li key={each.id}>
                  <GameItem item={each} />
                </li>
              ))}
            </ul>
          ) : (
            <Result result={result} />
          )}

          <Rules />
        </div>
      </GameContext.Provider>
    )
  }
}

export default App
