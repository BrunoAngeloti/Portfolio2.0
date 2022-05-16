import { 
  Container,
  Content,
  Title,
  Section,
  Stars,
  Button
} from "./MyProjects.styles"

import { CardProject } from "../../components/CardProject/CardProject"

export default function MyProjects(){
  return (
    <Container>
      <Stars />
      <Section>
        <Title fontSize={80}>MEUS PROJETOS</Title>
        <Content>
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
        </Content>
        <Button>Ver mais projetos</Button>
      </Section>
    </Container>
  )
}