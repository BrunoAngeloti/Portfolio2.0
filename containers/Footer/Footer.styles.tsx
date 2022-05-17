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
  padding: 10px 80px;
  width: 100%;
  
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  color: ${props => props.theme.colors.white};
  @media (max-width: 600px) {
    padding: 10px 30px;
  }
  @media (max-width: 380px) {
    padding: 10px 10px;
  }
`

export const Title = styled.p`
  z-index: 5;
  margin: 0;
  font-size: 1.6rem;
  @media (max-width: 475px) {
    font-size: 0.8rem;
  }
`