import Welcome from '../../Components/Welcome/Welcome'
import AboutMe from '../../Components/AboutMe/AboutMe'

function Home() {
  return (
    <div>
      <div id="home">

      <Welcome />
      </div>
      <div id='sobre mim'>

      <AboutMe />
      </div>

    </div>
  )
}

export default Home