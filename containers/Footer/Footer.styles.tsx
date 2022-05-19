import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  height: 110px;
  position: relative;
  display: flex;
  align-items: center;
  background-color: black;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 50px;
  width: 100%;
  
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  color: ${props => props.theme.colors.white};

`

export const Title = styled.p`
  z-index: 5;
  margin: 0;
  font-size: 1.6rem;
  @media (max-width: 475px) {
    font-size: 1rem;
  }
`