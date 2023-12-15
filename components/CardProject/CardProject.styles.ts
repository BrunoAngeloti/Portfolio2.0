import styled from 'styled-components'

export const Container = styled.div<{ wfull: boolean }>`
    display: flex;
    height: 250px;
    width: ${(props) => props.wfull ? '100%' : '350px'};
    background-color: #f5f5f5;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    overflow: hidden;
    min-width: 350px;
    box-shadow: 0 4px 20px rgba(0,0,0,.1);

    @media (max-width: 1280px) {
        min-width: 280px;
        width: ${(props) => props.wfull ? '100%' : '280px'};
    }

    @media (max-width: 454px) {
        width: 100%;
        min-width: 100%;
    }
`

export const ImageWrapper = styled.div<{image: string}>`
  height: 100%;
  width: 100%;
  position: relative;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.image});
`

export const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 40%;
  bottom: 0;
  
  z-index: 2;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export const Title = styled.h4`
  margin: 0;
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.black};
  @media (max-width: 786px) {
    font-size: 1.4rem;
  }
`

export const Info = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: auto;
  padding: 15px 25px;
  align-items: center;
  justify-content: space-between;
`

export const Link = styled.a`
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    transform: translateY(-3px);
  }
`