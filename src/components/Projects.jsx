import Titles from './Titles'
import Cards from './Cards'

function Projects() {
  return (
    // Should be request to api and do bucle for,afer you could pass like props the information to component Cards
    <>
    <Titles title='Skills'/>
    <div className="flex justify-around flex-wrap">
        <Cards title='title' description='lo que sea' img='https://jalberth.pythonanywhere.com/media/projects/medical-services2.jpg'/>
      </div>
    </>
  )
}

export default Projects