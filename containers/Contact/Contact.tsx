import emailjs from "emailjs-com"
import Swal from 'sweetalert2'
import { useState } from 'react';

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
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [loading, setLoading] = useState(false);

  function sendEmail(e: any){
    e.preventDefault();
    setLoading(true)
    emailjs.sendForm(
        "service_vvd1p08", 
        "template_5db77my", 
        e.target,
        "user_eKrDx6OksTnHKuRf2nDsU"
    ).then(res=>{
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Email enviado com sucesso'
          })
          setNameValue("")
          setEmailValue("")
          setMessageValue("")
          setLoading(false)
    }).catch(err=> console.log(err))
  }

  const handleUserInput = (e: any) => {
      setNameValue(e.target.value);
  };
  const handleEmailInput = (e: any) => {
      setEmailValue(e.target.value);
  };
  const handleMessageInput = (e: any) => {
      setMessageValue(e.target.value);
  };

  return (
    <Container>
      <Section>
        <Content>
          <Title fontSize={80}>CONTATO</Title>
          <Form onSubmit={sendEmail}>
            <FormGroup>
              <Label>NOME</Label>
              <Input value={nameValue} onChange={handleUserInput} required type="text" name="name" />
            </FormGroup>
            <FormGroup>
              <Label>EMAIL</Label>
              <Input value={emailValue} onChange={handleEmailInput} required type="email" name="user_email" className="email"/>
            </FormGroup>
            <FormGroup>
              <Label>MENSAGEM</Label>
              <TextArea value={messageValue} onChange={handleMessageInput} required name="message" className="message"/>
            </FormGroup>
            <Button loading={loading} type='submit'>{loading ? 'Enviando...' : 'Enviar'}</Button>
          </Form>
        </Content>
        <SpaceImage>
          <Image quality={100} width={802} height={833} alt="astronauta no espaço" src="/imageContact.svg"/>
        </SpaceImage>
      </Section>
    </Container>
  )
}