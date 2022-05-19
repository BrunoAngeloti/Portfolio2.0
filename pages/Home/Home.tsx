import Header from "../../containers/Header/Header"
import Main from "../../containers/Main/Main"
import About from "../../containers/About/About"
import MyProjects from "../../containers/MyProjects/MyProjects"
import Contact from "../../containers/Contact/Contact"
import Footer from "../../containers/Footer/Footer"

export default function Home(){
  return (
    <div>
      <Header />
      <Main />
      <About />
      {/*<MyProjects />
      <Contact />
      <Footer />*/}
    </div>  
  )
}