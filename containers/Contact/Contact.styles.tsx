import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  //background-color: ${props => props.theme.colors.main};
  background: url('/backgroundMyProject2.svg');
  background-size: cover;
  background-repeat: repeat-x;
  background-position: 50% -20%;
  padding: 50px 80px;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  max-width: 1280px;
  gap: 40px;
  margin-top: 250px;
  background-color: red;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`

export const Content = styled.div`
  width: 60%;
  
  @media (max-width: 1280px) {
    margin-top: 30px;
  }
  @media (max-width: 992px) {
    width: 100%;
  }
`

export const Title = styled.h1<{ fontSize: number }>`
  font-family: 'Oswald', sans-serif;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.fontSize}px;
  margin: 0;
  @media (max-width: 1280px) {
    font-size: ${props => props.fontSize - 16}px;
  }
`

export const Paragraph = styled.p`
  font-family: 'Ubuntu', sans-serif;
  color: ${props => props.theme.colors.white};
  font-size: 20px;
  margin-top: 30px;

  @media (max-width: 1280px) {
    font-size: 16px;
  }
`

export const SpaceImage = styled.div`
  width: 40%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
`