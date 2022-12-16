import "./style/carrusel.css";
import Card from "./Card";
import { Input } from "@chakra-ui/react";
import React from "react";

function Carrusel() {
  const data = [
    {
      id: 0,
      link: "https://github.com/GustavoAMM/Portafolio-React",
      banner: "https://w.wallhaven.cc/full/1p/wallhaven-1p398w.jpg",
      tag: ["java", "pyhton"],
      title: "Portafolio React",
      description: "Proyecto personal para poder practicar React y mostrar todos mis proyectos"
    }
  ];

  return (
    <div className="container-main rounded-3xl p-4 items-center">
      <h1 className="text-white text-center font-mono font-bold text-3xl my-4">
        Proj<span style={{ color: "crimson" }}>ects</span>
      </h1>
      <div className="grid justify-items-center">
        <Input placeholder="Programming language" autoFocus={true} className="text-white focus:" width="400px" />

      </div>
      <div className="container-card grid grid-cols-3 justify-items-center mt-4">
        {
          data.map((cita) => (
            <div key={cita.id} >
              <Card info={cita}>
              </Card>
            </div>

          ))
        }
      </div>
    </div>
  );
}
export default Carrusel;
