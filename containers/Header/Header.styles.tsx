import styled from 'styled-components'


export const Container = styled.header<{ visible: boolean, background: boolean }>`
  background-color: ${props => props.background ? `rgba(255,255,255,0.8)`: 'transparent'};
  backdrop-filter: ${props => props.background ? 'blur(5px)' : 'none'};
  padding: 30px 0;
  position: fixed;
  width: 100%;
  transition: 0.4s;
  top: ${props => props.visible ? '0' : '-100%'};
  right: 0;
  z-index: 10;
  @media (max-width: 992px) {
    padding: 20px 0;
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 80px;
  justify-content: flex-end;
  width: 100%;
  @media (max-width: 992px) {
    padding: 0 20px;
  }
`

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  gap: 50px;
  @media (max-width: 992px) {
    display: none;
  }
`

export const Items = styled.a`
  margin: 0;
  color: ${props => props.theme.colors.black};
  font-family: 'Oswald', sans-serif;
  font-size: 24px;
  cursor: pointer;

  &::after{
    content: '';
    display: block;
    border-bottom: solid 3px ${props => props.theme.colors.black}; 
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
    
  }  
  &:hover::after{
    transform: scaleX(1);
  }  
`

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 992px) {
    display: flex;
  }
`

export const NavMobile = styled.nav<{show: boolean}>`
  display: none;
  flex-direction: column;
  margin-left: auto;
  gap: 30px;
  display: flex;
  right: -300px;
  top: 0px;
  position: fixed;
  background-color: ${props => props.theme.colors.white};
  flex-direction: column;
  align-items: flex-start;
  width: 280px;
  height: 100%;
  z-index: 1001;
  padding: 20px;
  box-shadow: -2px 0px 5px rgba(0,0,0,0.5);
  
  ${props => props.show && `
    right: 0px;
  `}
  transition: 0.4s;
  @media (max-width: 892px) {
    display: flex;
  }
`

export const BackDrop = styled.div<{show: boolean}>`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 300vh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  ${props => props.show && `
    display: flex;
  `}
`