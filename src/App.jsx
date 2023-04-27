import Navbar from './components/Navbar'
import Description from './components/Description'
import Skills from './components/Skills'


function App() {


  return (
    <>
      <Navbar />
      <h1 className='text-bgOrange text-center text-7xl font-bold'>Hi, my name is Jalberth Mosquera</h1>
      <h2 className='text-bgWhite text-center text-5xl font-bold'>Back-end Developer</h2>
      <Description />
      <Skills />
    </>
  )
}

export default App
