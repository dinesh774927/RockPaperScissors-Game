import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 3px solid #ffffff;
  border-radius: 8px;
  align-self: stretch;
`
export const Logo = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 30px;
  width: 50px;
  margin: 0px;
`
export const ScoreContainer = styled.div`
  background-color: #ffffff;
  padding: 10px;
  color: #223a5f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 120px;
  font-family: 'Bree Serif';
`
export const ScoreName = styled.p`
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 26px;
  margin: 0px;
`

export const Score = styled.p`
  color: #223a5f;
  font-size: 50px;
  margin: 0px;
  font-weight: bold;
  font-family: 'Roboto';
`
