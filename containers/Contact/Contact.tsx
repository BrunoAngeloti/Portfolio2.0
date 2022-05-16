import { 
  Container,
  Content,
  Title,
  SpaceImage,
  Section
} from "./Contact.styles"

import Image from "next/image"

export default function Contact(){
  return (
    <Container>
      <Section>
        <Content>
          <Title fontSize={80}>CONTATO</Title>
        </Content>
        <SpaceImage>
          <Image quality={100} width={802} height={833} alt="astronauta no espaço" src="/imageContact.svg"/>
        </SpaceImage>
      </Section>
    </Container>
  )
}