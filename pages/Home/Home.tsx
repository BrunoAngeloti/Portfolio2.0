import { useRef } from 'react'

import Header from "../../containers/Header/Header"
import Main from "../../containers/Main/Main"
import About from "../../containers/About/About"
import MyProjects from "../../containers/MyProjects/MyProjects"
import Contact from "../../containers/Contact/Contact"
import Footer from "../../containers/Footer/Footer"

export default function Home(){
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  return (
    <div>
      <Header pag1={about} pag2={projects} pag3={contact}/>
      <Main />
      <About referencia={about}/>
      <MyProjects referencia={projects}/>
      <Contact referencia={contact}/>
      <Footer />
    </div>  
  )
}