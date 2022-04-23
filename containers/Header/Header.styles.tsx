import styled from 'styled-components'


export const Container = styled.header`
  background-color: ${props => props.theme.colors.white};
  padding: 30px 0;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 80px;
  justify-content: flex-end;
  width: 100%;
`

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  gap: 50px;
`

export const Items = styled.p`
  display: flex;
  margin: 0;
  color: ${props => props.theme.colors.black};
  font-family: 'Oswald', sans-serif;
  font-size: 24px;
  cursor: pointer;
`