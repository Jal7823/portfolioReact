import { useEffect, useState } from "react";

import {
  SiDjango,
  SiTailwindcss,
  SiNodedotjs,
  SiCss3,
  SiMysql,
  SiKubuntu,
  SiWindows,
  SiHtml5,
  SiFlask,
  SiFastapi,
} from "react-icons/si";

import Titles from "../components/Titles";

function Skills() {
  const [language, setLanguage] = useState([]);
  useEffect(() => {
    const req = async () => {
      const data = await fetch("http://localhost:8000/skills/");
      const json = await data.json();
      setLanguage(json);
    };
    req();
  }, []);

  const getIconByName = (name) => {
    switch (name) {
      case "SiDjango":
        return <SiDjango />;
      case "SiTailwindcss":
        return <SiTailwindcss />;
      case "SiNodedotjs":
        return <SiNodedotjs />;
      case "SiCss3":
        return <SiCss3 />;
      case "SiMysql":
        return <SiMysql />;
      case "SiKubuntu":
        return <SiKubuntu />;
      case "SiWindows":
        return <SiWindows />;
      case "SiHtml5":
        return <SiHtml5 />;
      case "SiFlask":
        return <SiFlask />;
      case "SiFastapi":
        return <SiFastapi />;

      default:
        return null;
    }
  };

  return (
    <>
      <Titles title="Skills" />
      <div className="flex flex-wrap gap-4 justify-around">
        {language.map((el) => {
          return (
            <div key={el.id}>
              <img
                className="rounded-full max-h-[10rem]"
                src="https://jalberth.pythonanywhere.com/media/skills/JavaScript-logo.png"
                alt=""
              />
              <h3 className="text-3xl text-bgWhite text-center font-medium  p-2 m-4">
                {el.name}
              </h3>
              <hr />
              <ul key={el.id}>
                {el.library.map((item) => (
                  <>
                    <div className="flex justify-around align-middle items-center">

                      <p className="text-white">{item.name}</p>
                      <div className="flex align-middle justify-center">

                      <li key={item.id} className="text-bgOrange mt-4 text-center my-auto text-2xl">
                        {getIconByName(item.icon)}
                      </li>
                      </div>
                    </div>
                  </>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Skills;
