import Navbar from './components/Navbar'
import Description from './components/Description'
import Certificarons from './components/Certifications'
import Projects from './components/Projects'
import Form from './components/Form'


function App() {


  return (
    <>
      <Navbar />
      <h1 className='text-bgOrange text-center text-7xl font-bold'>Hi, my name is Jalberth Mosquera</h1>
      <h2 className='text-bgWhite text-center text-5xl font-bold'>Back-end Developer</h2>
      <Description />
      <Certificarons />
      <Projects />
      <div className="flex justify-around  m-4">
        <a className='bg-bgOrange text-bgWhite p-3 w-25 rounded' href="">👍</a>
        <a className='bg-bgOrange text-bgWhite p-3 w-25 rounded' href="">👍</a>
      </div>
      <Form />
    </>
  )
}

export default App
