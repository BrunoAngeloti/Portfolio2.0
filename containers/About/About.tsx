import { 
  Container,
  Content,
  Title,
  Paragraph,
  SpaceImage,
  ImageWrapper,
  Section,
  Icons,
  Icon,
  Skills,
  Stars
} from "./About.styles"

import { 
  SiPython, 
  SiJavascript, 
  SiTypescript, 
  SiC, 
  SiCplusplus, 
  SiJava,
  SiRedux,
  SiJest,
  SiReact,
  SiHtml5,
  SiCss3,
  SiSass,
  SiGit,
  SiNextdotjs,
  SiFigma,
  SiArduino,
  SiCypress
} from "react-icons/si";

import Image from "next/image"

const contentText = [
  'Eu sou Bruno Angeloti e tenho 20 anos. Faço engenharia de computação e sou um amante de tecnologia.',
    'Atualmente trabalho como desenvolvedor Front-end pela Wine.com.br e amo fazer uns sites e designs como hobby.',
  'Tenho experiência com desenvolvimento de sistemas web e mobile, desenvolvimento de aplicativos nativos e desenvolvimento de aplicativos para dispositivos móveis.',
  'Nascido e crescido em São Paulo, mas atualmente moro em Vitória-ES há 10 anos, estudando na Universidade Federal do Espírito Santo.'
]

export default function About({ referencia } : any){
  return (
    <Container ref={referencia}>
      <Stars />
      <Section>
        <Content>
          <Title fontSize={80}>QUEM SOU EU?</Title>
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
          <Skills>
            <Title fontSize={40}>LINGUAGENS</Title>
            <Icons>
              <Icon>
                <SiPython size={40} color="white"/>
                <span>Python</span>
              </Icon>
              <Icon>
                <SiJavascript size={40} color="white"/>
                <span>JavaScript</span>
              </Icon>
              <Icon>
                <SiTypescript size={40} color="white"/>
                <span>Typescript</span>
              </Icon>
              <Icon>
                <SiC size={40} color="white"/>
                <span>C</span>
              </Icon>
              <Icon>
                <SiCplusplus size={40} color="white"/>
                <span>C++</span>
              </Icon>
              <Icon>
                <SiJava size={40} color="white"/>
                <span>Java</span>
              </Icon>
            </Icons>
          </Skills>
          <Skills>
            <Title fontSize={40}>TECNOLOGIAS</Title>
            <Icons>
              <Icon>
                <SiRedux size={40} color="white"/>
                <span>Redux</span>
              </Icon>
              <Icon>
                <SiJest size={40} color="white"/>
                <span>Jest</span>
              </Icon>
              <Icon>
                <SiCypress size={40} color="white"/>
                <span>Cypress</span>
              </Icon>
              <Icon>
                <SiReact size={40} color="white"/>
                <span>React</span>
              </Icon>
              <Icon>
                <SiNextdotjs size={40} color="white"/>
                <span>Next.js</span>
              </Icon>
              <Icon>
                <SiHtml5 size={40} color="white"/>
                <span>HTML5</span>
              </Icon>
              <Icon>
                <SiCss3 size={40} color="white"/>
                <span>CSS3</span>
              </Icon>
              <Icon>
                <SiSass size={40} color="white"/>
                <span>Sass</span>
              </Icon>
              <Icon>
                <SiGit size={40} color="white"/>
                <span>Git</span>
              </Icon>
              <Icon>
                <SiFigma size={40} color="white"/>
                <span>Figma</span>
              </Icon>
              <Icon>
                <SiArduino size={40} color="white"/>
                <span>Arduino</span>
              </Icon>
            </Icons>
          </Skills>
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