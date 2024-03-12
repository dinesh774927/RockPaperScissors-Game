import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {RulesButton, PopContainer, Close, RulesImg} from './styledComponent'
import GameContext from '../../Context/gameContext'

const closeIcon = <RiCloseLine fontSize="20px" />

const Rules = () => (
  <GameContext.Consumer>
    {() => (
      <Popup modal trigger={<RulesButton type="button"> RULES</RulesButton>}>
        {close => (
          <PopContainer>
            <Close type="button" className="close" onClick={close}>
              {closeIcon}
            </Close>
            <RulesImg
              alt="rules"
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            />
          </PopContainer>
        )}
      </Popup>
    )}
  </GameContext.Consumer>
)

export default Rules
