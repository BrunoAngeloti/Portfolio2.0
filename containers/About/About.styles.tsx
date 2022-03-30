import styled from 'styled-components'


export const Container = styled.header`
  display: flex;
  background-color: ${props => props.theme.colors.main};
  padding: 50px 80px;
  width: 100%;
  flex-direction: row;
`

export const Content = styled.div`
  width: 60%;
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
  margin-top: 40px;
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


 
