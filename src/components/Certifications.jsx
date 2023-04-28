import Title from "./Titles";
import Cards from './Cards'

function Skills() {

  return (
    // Should be request to api and do bucle for,afer you could pass like props the information to component Cards
    <>
      <Title title='Certifications'/>
      <div className="flex justify-around flex-wrap">
        <Cards title='title' description='lo que sea' img='https://jalberth.pythonanywhere.com/media/Inst/estructure.png'/>
      </div>
    </>
  );
}

export default Skills;
