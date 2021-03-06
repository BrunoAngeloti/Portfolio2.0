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
  width: 700px;
  height: 1150px;

  @media (max-width: 1880px) {
    width: 600px;
    height: 1000px;
  }

  @media (max-width: 1280px) {
    width: 480px;
    height: 880px;
  }

  @media (max-width: 992px) {
    display: none;
  }
`

export const ImageWrapperMobile = styled.div`
  position: absolute;
  display: none;
  left: -25px;
  top: 0px;
  width: 500px;
  height: 400px;

  @media (max-width: 992px) {
    display: flex;
  }
  @media (max-width: 480px) {
    width: 400px;
    top: -24px;
  }
  @media (max-width: 380px) {
    width: 300px;
    top: -68px;
  }
`

export const ImageWrapperPlant = styled.div`
  position: absolute;
  margin-right: 65px;
  right: 0;
  bottom: 0;

  width: 850px;
  height: 250px;

  @media (max-width: 1280px) {
    width: 650px;
    height: 50px;
    bottom: 140px;
  }
  @media (max-width: 730px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 80px;
    left: 0;
  }
`

export const Content = styled.section`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-right: 80px;
  @media (max-width: 730px) {
    align-items: center;
    padding-right: 0px;
  }
`

const TextCommon = styled.h1`
  font-family: 'Oswald', sans-serif;
  color: ${props => props.theme.colors.black};

  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
`

export const Title = styled(TextCommon)`
  font-size: 80px;
  width: 100%;
  text-align: right;
  word-break: break-word;
  span{
    background: -webkit-linear-gradient(60deg, #AB28AD, #492CB1);
    -webkit-background-clip: text;
            background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 1280px) {
    font-size: 60px;
  }

  @media (max-width: 730px) {
    font-size: 40px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 30px;
    text-align: center;
  }
`

export const Subtitle = styled(TextCommon)`
  font-size: 50px;
  @media (max-width: 1280px) {
    font-size: 30px;
  }
  @media (max-width: 730px) {
    font-size: 30px;
    text-align: center;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`