import Title from "./Titles";
import Cards from './Cards'

function Skills() {

  


  return (
    <>
      <Title title='Skills'/>
      <div className="flex justify-around flex-wrap">
        <Cards title='title' description='lo que sea' img='https://jalberth.pythonanywhere.com/media/Inst/estructure.png'/>

      </div>
    </>
  );
}

export default Skills;
