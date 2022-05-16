import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  //background-color: ${props => props.theme.colors.main};
  background: url('/backgroundMyProject.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 40%;
  padding: 50px 80px;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
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
  

  @media (max-width: 1280px) {
    width: 600px;
  }
`

export const Section = styled.section`
  display: flex;
  max-width: 1280px;
  flex-direction: column;
  gap: 20px;

`

export const Content = styled.div`
  width: 1280px;
  margin-top: 60px;
  padding: 0px 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  z-index: 20;
  gap: 20px;
  justify-content: space-between;
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
  width: 100%;
  text-align: right;
  padding: 0px 50px;
  @media (max-width: 1280px) {
    font-size: ${props => props.fontSize - 16}px;
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