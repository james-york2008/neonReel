import Hero from './components/hero/Hero'
import Filters from './components/filters/Filters'
import Movies from './components/movies/Movies'
import Random from './components/random/Random'
import Footer from './components/footer/Footer'

import heroImage from './assets/heroImage.png'

function App() {

  return (
    <>
      <div id="backgroundImageWrapper" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',}}>
        <Hero />
        <Filters />
      </div>
    
      <Movies />
      <Random />
      <Footer />
    </>
  )
}

export default App
