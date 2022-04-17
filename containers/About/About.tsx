import { 
  Container,
  Content,
  Title,
  Paragraph,
  SpaceImage,
  ImageWrapper,
  Section,
  Icons
} from "./About.styles"

import Image from "next/image"

const contentText = [
  'Eu sou Bruno Angeloti e tenho 20 anos. Faço engenharia de computação e sou um amante de tecnologia.',
    'Atualmente trabalho como desenvolvedor Front-end pela Wine.com.br e amo fazer uns sites e designs como hobby.',
  'Tenho experiência com desenvolvimento de sistemas web e mobile, desenvolvimento de aplicativos nativos e desenvolvimento de aplicativos para dispositivos móveis.',
  'Nascido e crescido em São Paulo, mas atualmente moro em Vitória-ES há 10 anos, estudando na Universidade Federal do Espírito Santo.'
]

export default function About(){
  return (
    <Container>
      <Section>
        <Content>
          <Title>QUEM SOU EU?</Title>
          {contentText.map((text, index) => (
            <Paragraph key={index}>{text}</Paragraph>
          ))}
          <Icons>
            <a href="https://www.instagram.com/bruno_angeloti/" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/instagram.svg" width={28} height={28} alt="icone instagram"/>
            </a>
            <a href="https://github.com/BrunoAngeloti" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/github.svg" width={28} height={28} alt="icone github"/>
            </a>
            <a href="https://www.linkedin.com/in/bruno-angeloti-pires" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/linkedin.svg" width={28} height={28} alt="icone linkedin"/>
            </a>
          </Icons>
        </Content>
        <SpaceImage>
          <ImageWrapper>
            <Image quality={100} width={500} height={680} alt="astronauta no espaço" src="/eu.png"/>
          </ImageWrapper>
        </SpaceImage>
      </Section>
    </Container>
  )
}