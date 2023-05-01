import { useState, useEffect } from "react";
import Title from "../components/Titles";
import Cards from "../components/Cards";

function Skills() {
  const [projects, setprojects] = useState([]);

  useEffect(() => {
    const req = async () => {
      const data = await fetch("http://localhost:8000/projects/");
      const json = await data.json();
      setprojects(json);
    };
    req();
  }, []);

  if (projects.length === 0) {
    return (
      <div>
        <Title title="Projects" />
        <p className="text-5xl text-bgWhite text-center">
          There is nothing to show
        </p>
      </div>
    );
  }

  return (
    <>
      <Title title="Projects" id='projects'/>
      <div className="flex justify-around flex-wrap">
        {projects.map((el) => (
          <div key={el.id}>
            <Cards
              title={el.name}
              description={el.description}
              img="https://jalberth.pythonanywhere.com/media/projects/medical-services2.jpg"
              link={el.url}
            />
            
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
