import { 
  Container,
  Content,
  Title,
  Paragraph,
  SpaceImage,
  ImageWrapper
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
      <Content>
        <Title>QUEM SOU EU?</Title>
        {contentText.map((text, index) => (
          <Paragraph key={index}>{text}</Paragraph>
        ))}
      </Content>
      <SpaceImage>
        <ImageWrapper>
          <Image quality={100} width={500} height={680} alt="astronauta no espaço" src="/eu.png"/>
        </ImageWrapper>
      </SpaceImage>
    </Container>
  )
}