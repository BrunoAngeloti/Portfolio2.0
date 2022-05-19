import Image from 'next/image';
import { useEffect, useState } from 'react'
import { Container, Nav, List, Items, Hamburger, NavMobile, BackDrop } from "./Header.styles"

export default function Header(){
  const [visible, setVisible] = useState(true)
  const [background, setBackground] = useState(false)
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
  let val: number;

  function handleMenu() {
    setIsOpenMenu(state => !state)
  }

  function handleScroll(){
    if(window.pageYOffset > 50){
        setBackground(true);
    }else{
        setBackground(false);
    }
    if(window.pageYOffset > val && window.pageYOffset > 50) {
        setVisible(false);
    }else{
        setVisible(true);
    }
    val = window.pageYOffset    
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if(isOpenMenu) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'visible'
  }, [isOpenMenu])

  return (
    <>
      <Container visible={visible} background={background}>
        <Nav>
          <List>
            <Items>SOBRE</Items>
            <Items>PROJETOS</Items>
            <Items>CONTATO</Items>
          </List>
          <Hamburger onClick={handleMenu}>
            <Image src="/iconHamburger.svg" width={32} height={32} alt="icone para abrir o menu lateral"/>
          </Hamburger>
        </Nav>
      </Container>
      <NavMobile show={isOpenMenu}>
        <Image style={{ cursor: 'pointer' }} src="/close.svg" alt="Close" width={24} height={24} onClick={handleMenu} />
        <Items>SOBRE</Items>
        <Items>PROJETOS</Items>
        <Items>CONTATO</Items>
      </NavMobile>
      <BackDrop show={isOpenMenu} onClick={handleMenu}/>
    </>
  )
}