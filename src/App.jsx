import { GoOctoface } from 'react-icons/go';
import { BsLinkedin } from 'react-icons/bs';


import Navbar from './sections/Navbar'
import Description from './sections/Description'
import Certifications from './sections/Certifications'
import Projects from './sections/Projects'
import Form from './sections/Form'
import Skills from './sections/Skills'

function App() {
  return (
    <div className=''>
      <Navbar />
      <h1 className='text-bgOrange text-center text-7xl font-bold mt-8'>Hi, my name is Jalberth Mosquera</h1>
      <h2 className='text-bgWhite text-center text-5xl font-bold'>Back-end Developer</h2>
      <Description id="description" />
      <Skills />
      <Certifications id="certifications" />
      <Projects id="projects" />
      <div className="flex justify-around  m-4">
        <a className=' text-center bg-bgOrange text-bgWhite p-4  rounded-full hover:bg-bgBlue' href=""><GoOctoface className='mx-auto text-2xl'/></a>
        <a className=' text-center bg-bgOrange text-bgWhite p-4  rounded-full hover:bg-bgBlue' href=""><BsLinkedin className='mx-auto text-2xl'/></a>
      </div>
      <Form id="form" />
    </div>
  )
}

export default App