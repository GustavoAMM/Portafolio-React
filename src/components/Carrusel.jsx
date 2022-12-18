import { RadioGroup, Input, Button } from "@chakra-ui/react";
import { data } from "../data/data";
import { tags } from "../data/tags";
import { useState } from "react";
import Card from "./Card";
import "./style/carrusel.css";

function Carrusel() {
  //filtar la data inicial
  const [inputData, SetInputData] = useState(data);
  //bg dinamico de los button-cat
  const [BgColor, setBgColor] = useState("");
  //Valor del input
  const [valueInput, setvalueInput] = useState("");
  let AV = [""];

  //Definir categoria - button
  function setCategory(cat) {
    const result = data.filter((tagles) =>
      tagles.tag.includes(cat.toLocaleLowerCase())
    );
    if (cat == []) {
      SetInputData(data);
    } else {
      if (Object.entries(result).length === 0) {
        SetInputData(AV);
      } else {
        SetInputData(result);
      }
    }
  }

  return (
    // main container
    <div className="bg-[#191724] rounded-3xl p-4 items-center xl:w-[1000px] sm:w-[700px] w-[370px] xl:h-[570px] sm:h-[700px] h-[700px]">
      <h1 className="text-white text-center font-mono font-bold text-3xl xl:my-2 sm:my-9">
        Proj<span className="text-[#dc143c]">ects</span>
      </h1>
      {/* Input and button-cat container */}
      <div className="grid justify-items-center">
        <Input
          placeholder="Project's name"
          autoFocus={true}
          value={valueInput}
          className="text-white mt-4"
          width="300px"
          onChange={(e) => {

            setvalueInput(e.target.value);
            let valorBuscado = e.target.value;
            //Buscar valorBuscado en la data
            const result = data.filter(
              (tagles) => tagles.title === valorBuscado
            );
            // Sí es vacio muestras todo
            if (valorBuscado == []) {
              SetInputData(data);
            } else {
              //Sí el resultado de la busqueda esta vacio muestras todo
              if (Object.entries(result).length === 0) {
                SetInputData(AV);
              } else {
                //Mostrar el valor buscado
                SetInputData(result);
              }
            }
          }}
          onClick={() => {
            //Cambiamos la categoria a all
            setCategory("");
            setBgColor("");
          }}
        />
        {/* Button-cat dynamic */}
        <RadioGroup className="pt-4 justify-around flex gap-x-4 card-category xl:w-[700px] sm:w-[550px] w-[290px] bg-slate-">
          {tags.map((newTag) => (
            <Button
              colorScheme={BgColor === newTag.value ? "pink" : "red"}
              key={newTag.value}
              variant="outline"
              size="xs"
              onClick={() => {
                let valorBuscado = newTag.value;
                //cambiamos la categoria y limpiamos input
                setCategory(valorBuscado);
                setBgColor(newTag.value);
                setvalueInput("");
              }}
            >
              {newTag.label}
            </Button>
          ))}
        </RadioGroup>
      </div>
      {/* render-card container */}
      <div className="container-card grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center xl:mt-4 sm:mt-12 mt-4 xl:h-[370px] sm:h-[350px] h-[500px]">
        {/* Filtramos la data para las card */}
        {inputData.map((newData) => (
          <div key={newData.id}>
            <Card info={newData}></Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carrusel;
