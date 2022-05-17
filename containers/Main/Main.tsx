import Image from "next/image"
import { 
  Container, 
  ImageWrapper, 
  ImageWrapperMobile,
  Content, 
  Title, 
  Subtitle,
  ImageWrapperPlant
} from "./Main.styles"

export default function Main(){
  return (
    <Container>
      <ImageWrapper>
        <Image quality={100} width={700} height={1150} alt="astronauta no espaço" src="/imageHome.svg"/>
      </ImageWrapper>
      <ImageWrapperMobile>
        <Image quality={100} width={700} height={616} alt="astronauta no espaço" src="/imageHome2.svg"/>
      </ImageWrapperMobile>

      <Content>
        <Title>
          EU SOU <span>BRUNO ANGELOTI</span>
        </Title>
        <Subtitle>DESENVOLVEDOR FRONT-END</Subtitle>
      </Content>  

      <ImageWrapperPlant>
        <Image quality={70} width={850} height={250} alt="astronauta no espaço" src="/plantHome.svg"/>
      </ImageWrapperPlant>
    </Container>
  )
}