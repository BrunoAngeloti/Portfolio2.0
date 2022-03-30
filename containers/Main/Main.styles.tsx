import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  background-color: ${props => props.theme.colors.white};
  position: relative;
  flex-direction: row;
  height: 100vh;
  width: 100%;
`

export const ImageWrapper = styled.div`
  position: absolute;
  left: 0;
  top: -45px;
`

export const ImageWrapperPlant = styled.div`
  position: absolute;
  margin-right: 65px;
  right: 0;
  bottom: 0;
`

export const Content = styled.section`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-right: 80px;
`

const TextCommon = styled.h1`
  font-family: 'Oswald', sans-serif;
  color: ${props => props.theme.colors.black};

  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
`

export const Title = styled(TextCommon)`
  font-size: 80px;
  span{
    background: -webkit-linear-gradient(60deg, #AB28AD, #492CB1);
    -webkit-background-clip: text;
            background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const Subtitle = styled(TextCommon)`
  font-size: 50px;
`