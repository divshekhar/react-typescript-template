import { FC } from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/Home'
import Footer from './Footer'

const App: FC = () => {
  return (
    <div id="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
