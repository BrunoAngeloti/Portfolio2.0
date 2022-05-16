import Header from "../../containers/Header/Header"
import Main from "../../containers/Main/Main"
import About from "../../containers/About/About"
import MyProjects from "../../containers/MyProjects/MyProjects"
import Contact from "../../containers/Contact/Contact"

export default function Home(){
  return (
    <div>
      <Header />
      <Main />
      <About />
      <MyProjects />
      <Contact />
    </div>  
  )
}