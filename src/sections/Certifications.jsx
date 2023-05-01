import { useState, useEffect } from "react";
import Title from "../components/Titles";
import Cards from "../components/Cards";

function Skills() {
  const [certf, setCertf] = useState([]);

  useEffect(() => {
    const req = async () => {
      const data = await fetch("http://localhost:8000/certifications/");
      const json = await data.json();
      setCertf(json);
    };
    req();
  }, []);

  if (certf.length === 0) {
    return (
      <div>
        <Title title="Certifications" />
        <p className="text-5xl text-bgWhite text-center">
        There is nothing to show
        </p>
      </div>
    );
  }

  return (
    <>
      <Title title="Certifications" />
      <div className="flex justify-around flex-wrap">
        {certf.map((el) => (
          <Cards
            key={el.id}
            title={el.name}
            description={el.institutions}
            img="https://jalberth.pythonanywhere.com/media/Inst/estructure.png"
            link={el.url}
          />
        ))}
      </div>
    </>
  );
}

export default Skills;
