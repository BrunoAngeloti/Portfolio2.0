import { Container, Nav, List, Items } from "./Header.styles"

export default function Header(){
  return (
    <Container>
      <Nav>
        <List>
          <Items>SOBRE</Items>
          <Items>PROJETOS</Items>
          <Items>CONTATO</Items>
        </List>
      </Nav>
    </Container>
  )
}