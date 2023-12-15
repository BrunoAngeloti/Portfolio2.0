import styled from 'styled-components'

const Container = styled.header`
  display: flex;
  background-color: ${props => props.theme.colors.main};

  min-height: 100vh;
  width: 100%;
  justify-content: center;
  position: relative;
  padding: 20px 0px;
`

export const Section = styled.section`
  flex-direction: column;
  display:flex;
  max-width: 1280px;
  width: 100%;
  gap: 20px;
  padding: 0 40px;
`

const Content = styled.div`
  display: grid;

  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;

  @media(max-width: 1024px){
    grid-template-columns: 1fr 1fr;
  }

  @media(max-width: 768px){
    grid-template-columns: 1fr;
  }
  
`

const Title = styled.h1<{ fontSize: number }>`
  font-family: 'Oswald', sans-serif;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.fontSize}px;
  margin: 0;
  width: 100%;
  text-align: left;
`

import { projects2 } from '../data/projects/data'
import { CardProject } from '../components/CardProject/CardProject'

export default function Portfolio(){
  return(
    <>
      <Container>
        <Section>
          <Title fontSize={50}>MEUS PROJETOS</Title>
          <Content>
            {projects2.map((project, idx) => <CardProject wfull key={idx} project={project}/>)}
          </Content>
        </Section>
      </Container>
    </>
  )
}