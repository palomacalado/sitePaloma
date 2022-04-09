import Welcome from '../../components/welcome/welcome'
import AboutMe from '../../components/about-me/about-me'

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