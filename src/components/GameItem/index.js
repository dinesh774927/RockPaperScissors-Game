import {GameButton, GameImg} from './styledComponent'
import GameContext from '../../Context/gameContext'

const GameItem = props => {
  const {item} = props

  return (
    <GameContext.Consumer>
      {value => {
        const {selectOption} = value

        const change = () => {
          selectOption(item.id)
        }

        return (
          <GameButton data-testid={item.test} type="button" onClick={change}>
            <GameImg alt={item.id} src={item.imageUrl} />
          </GameButton>
        )
      }}
    </GameContext.Consumer>
  )
}

export default GameItem
