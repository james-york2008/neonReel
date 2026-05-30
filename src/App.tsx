import Hero from './components/Hero'
import Filters from './components/Filters'
import Movies from './components/Movies'
import Random from './components/Random'
import Footer from './components/Footer'

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
