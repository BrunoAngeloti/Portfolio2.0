import styled from 'styled-components'

export const Container = styled.header`
  background: url('/backgroundMyProject.svg');
  background-size: auto;
  background-repeat: repeat-x;
  background-position: 50% 90%; 

  @media (max-width: 665px) {
    
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  width: 100%;
  overflow: hidden; 

  @media (max-width: 600px) {
    padding: 20px;
  }
`

export const Stars = styled.div`
  position: absolute;
  top: 0px;
  width: 95%;
  height: 400px;
  left: 50px;
  background-image: url('/stars2.svg');
  background-repeat: repeat;
  background-size: contain;
  
  @media (max-width: 992px) {
    left: 10px;

    height: 200px;
  }
 
`

export const Section = styled.section`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display:flex;
  max-width: 1281px;
  gap: 20px;

  @media(max-width: 850px){
    width: 100%;        
  } 
`

export const Content = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;

  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 10px;
  
  @media(max-width: 840px){
    flex-wrap: nowrap;
    overflow-x: scroll;
    justify-content: flex-start;
    padding: 20px;
  }
  @media (max-width: 454px) {
    padding: 0px 20px;
  }
`

export const Title = styled.h1<{ fontSize: number }>`
  font-family: 'Oswald', sans-serif;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.fontSize}px;
  margin: 0;
  width: 100%;
  text-align: right;
  z-index: 10;
  padding: 0px 50px;
  @media (max-width: 1280px) {
    font-size: ${props => props.fontSize - 16}px;
  }
  @media (max-width: 681px) {
    text-align: center;
  }
  @media (max-width: 454px) {
    font-size: ${props => props.fontSize - 24}px;
  }
`
export const Button = styled.button`
  font-family: 'Ubuntu', sans-serif;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.main};
  border: none;
  width: 250px;
  height: 60px;
  border-radius: 5px;
  align-self: center;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }
`