import { 
  Container,
  Content,
  Title,
  SpaceImage,
  Section,
  Form,
  FormGroup,
  Label,
  Input,
  TextArea,
  Button
} from "./Contact.styles"

import Image from "next/image"

export default function Contact(){
  return (
    <Container>
      <Section>
        <Content>
          <Title fontSize={80}>CONTATO</Title>
          <Form>
            <FormGroup>
              <Label>NOME</Label>
              <Input />
            </FormGroup>
            <FormGroup>
              <Label>EMAIL</Label>
              <Input />
            </FormGroup>
            <FormGroup>
              <Label>MENSAGEM</Label>
              <TextArea />
            </FormGroup>
            <Button type='submit'>Enviar</Button>
          </Form>
        </Content>
        <SpaceImage>
          <Image quality={100} width={802} height={833} alt="astronauta no espaço" src="/imageContact.svg"/>
        </SpaceImage>
      </Section>
    </Container>
  )
}