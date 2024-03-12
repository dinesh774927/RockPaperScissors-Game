import GameContext from '../../Context/gameContext'
import {ResultContainer, Name, Card, SelectionImg} from './styledComponent'
import {RulesButton} from '../Rules/styledComponent'

const Result = props => {
  const {result} = props
  return (
    <GameContext.Consumer>
      {value => {
        const {playAgain} = value
        return (
          <Card>
            <ResultContainer>
              <Card>
                <Name>You</Name>
                <SelectionImg alt="your choice" src={result.you.imageUrl} />
              </Card>
              <Card>
                <Name>OPPONENT</Name>
                <SelectionImg
                  alt="opponent choice"
                  src={result.computer.imageUrl}
                />
              </Card>
            </ResultContainer>
            <Card>
              <Name>{result.status}</Name>
              <RulesButton type="button" onClick={playAgain}>
                PLAY AGAIN
              </RulesButton>
            </Card>
          </Card>
        )
      }}
    </GameContext.Consumer>
  )
}

export default Result
