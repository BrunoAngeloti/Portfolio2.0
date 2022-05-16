import Header from "../../containers/Header/Header"
import Main from "../../containers/Main/Main"
import About from "../../containers/About/About"
import MyProjects from "../../containers/MyProjects/MyProjects"

export default function Home(){
  return (
    <div>
      <Header />
      <Main />
      <About />
      <MyProjects />
    </div>  
  )
}