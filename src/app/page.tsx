import About from './About/page'
import Home from './components/home'
import Contact from './Contact/page'
import Services from './Service/page'
import Projects from './Projects/page'
import Skills from './Skills/page'

const page = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Projects/> 
      <Contact/>
    </div>
  )
}

export default page
