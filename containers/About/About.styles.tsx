import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  background-color: ${props => props.theme.colors.main};
  padding: 50px 80px;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const Stars = styled.div`
  position: absolute;
  bottom: 0px;
  height: 95%;
  width: 800px;
  right: 0px;
  background-image: url('/stars1.svg');
  background-repeat: repeat;
  background-size: contain;
  z-index: 1;
  @media (max-width: 1280px) {
    width: 600px;
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  max-width: 1280px;
  gap: 40px;
  z-index: 2;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`

export const Content = styled.div`
  width: 60%;
  margin-top: 60px;
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
  z-index: 2;
  @media (max-width: 1280px) {
    font-size: ${props => props.fontSize - 16}px;
  }
`

export const Paragraph = styled.p`
  font-family: 'Ubuntu', sans-serif;
  color: ${props => props.theme.colors.white};
  font-size: 20px;
  margin-top: 30px;
  z-index: 2;

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
  @media (max-width: 992px) {
    display: none;
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-50px);
  position: sticky;
  top: 20px;
  @media (max-width: 1280px) {
    width: 80%;
  }
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 40px;
  gap: 40px;
  flex-wrap: wrap;
  z-index: 2;
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

export const Icon = styled.div`
  width: 50px;
  font-family: 'Ubuntu', sans-serif;
  color: ${props => props.theme.colors.white};
  font-size: 15px;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: content-box;
  z-index: 2;

  span{
    color: ${props => props.theme.colors.main};
    transition: 0.3s;
    text-align: center;
  }

  &:hover{
    span{
      color: ${props => props.theme.colors.white};
    }
  }
`

export const Skills = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  z-index: 2;
`