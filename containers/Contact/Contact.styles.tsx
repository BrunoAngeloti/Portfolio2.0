import styled, { css } from 'styled-components'

export const Container = styled.header`
  display: flex;
  background-image: url('/backgroundMyProject2.svg');
  background-color: ${props => props.theme.colors.main};
  background-size: auto;
  background-position-x: 50%;
  background-repeat: repeat-x;
  
  padding: 50px 80px;
  width: 100%;
  
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 700px) {
    padding: 40px 20px;
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  max-width: 1280px;
  width: 100%;
  margin-top: 220px;
  gap: 50px;
 
  @media (max-width: 1280px) {
    margin-top: 150px;
    padding: 20px 20px;
  }
`

export const Content = styled.div`
  width: 50%;
  @media (max-width: 992px) {
    width: 100%;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
  width: 100%;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 5px;
`

export const Label = styled.label`
  font-size: 16px;
  color: ${props => props.theme.colors.white};
  font-family: 'Oswald', sans-serif;
`

export const Input = styled.input`
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 0px 15px;
  font-family: 'Oswald', sans-serif;
  font-size: 16px;
  @media (max-width: 1280px) {
    height: 40px;
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  background-color:  ${props => props.theme.colors.white};
  box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  resize: none;
  outline: none;
  padding: 10px 15px;
  font-family: 'Oswald', sans-serif;
  font-size: 16px;
  &::-webkit-scrollbar {
    width: 10px;
  }
    
  /* Track */
  &::-webkit-scrollbar-track {
    border-radius: 5px;
  }
  
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.secondary};
    border-radius: 5px;
  }

  @media (max-width: 1280px) {
    height: 100px;
  }
`

export const Title = styled.h1<{ fontSize: number }>`
  font-family: 'Oswald', sans-serif;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.fontSize}px;
  margin: 0;
  @media (max-width: 1280px) {
    font-size: ${props => props.fontSize - 20}px;
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
  width: 50%;
  display: flex;
  align-items: center;
  @media (max-width: 992px) {
    display: none;
  }
`

export const Button = styled.button<{loading: boolean}>`
  width: 120px;
  background-color: ${props => props.theme.colors.secondary};
  height: 55px;
  font-family: 'Oswald', sans-serif;
  color: ${props => props.theme.colors.white};
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  transition: 0.4s;
  border-radius: 5px;
  &:hover {
    filter: brightness(0.9);
    transform: translateY(-5px);
  }

  @media (max-width: 1280px) {
    height: 45px;
  }

  ${props => props.loading && css`
    cursor: not-allowed;
    opacity: 0.5;
  `}
`