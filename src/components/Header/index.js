import {Nav, Logo, ScoreContainer, ScoreName, Score} from './styledComponents'
import GameContext from '../../Context/gameContext'

const Header = () => (
  <GameContext.Consumer>
    {value => {
      const {score} = value
      return (
        <Nav>
          <div>
            <Logo>Rock Paper Scissors</Logo>
          </div>
          <ScoreContainer>
            <ScoreName>Score</ScoreName>
            <Score>{score}</Score>
          </ScoreContainer>
        </Nav>
      )
    }}
  </GameContext.Consumer>
)

export default Header
