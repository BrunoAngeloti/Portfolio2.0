import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  background-color: ${props => props.theme.colors.main};
  padding: 50px 80px;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  max-width: 1280px;
  gap: 40px;
`

export const Content = styled.div`
  width: 60%;
  margin-top: 60px;
`

export const Title = styled.h1`
  font-family: 'Oswald', sans-serif;
  color: ${props => props.theme.colors.white};
  font-size: 80px;
  margin: 0;
`

export const Paragraph = styled.p`
  font-family: 'Ubuntu', sans-serif;
  color: ${props => props.theme.colors.white};
  font-size: 20px;
  margin-top: 30px;
`


export const SpaceImage = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-50px);
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 40px;
  gap: 40px;
  a{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px;
    width: 40px;
    border: 1px solid ${props => props.theme.colors.white};
    border-radius: 50%;
    transition: all 0.4s ease;

    &:hover{
      transform: translateY(-5px) rotateZ(10deg);
    }
  }
`


 
