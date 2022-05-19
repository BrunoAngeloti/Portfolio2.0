import { 
  Container,
  Content,
  Title,
  Section,
  Stars,
  Button
} from "./MyProjects.styles"

import { CardProject } from "../../components/CardProject/CardProject"

import { projects } from '../../data/projects/data'

export default function MyProjects({ referencia } : any){
  return (
    <Container ref={referencia}>
      <Stars />
      <Section>
        <Title fontSize={80}>MEUS PROJETOS</Title>
        <Content>
          {projects.map((project, idx) => <CardProject key={idx} project={project}/>)}
        </Content>
        <Button><a href="https://github.com/BrunoAngeloti?tab=repositories" target="_blank" rel="noreferrer">Ver mais projetos</a></Button>
      </Section>
    </Container>
  )
}