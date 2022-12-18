import "./style/carrusel.css";
import Card from "./Card";
import { RadioGroup, Input, Button } from "@chakra-ui/react";
import { data } from "../data/data"
import { useState } from 'react'
import { tags } from "../data/tags"



function Carrusel() {

  const [asd, SetAsd] = useState(data)
  const [color, setcolor] = useState("")
  const [valueInput, setvalueInput] = useState("")
  let AV = [""]

  function setCategory(cat) {
    const result = data.filter(tagles => tagles.tag.includes(cat.toLocaleLowerCase()))
    if (cat == []) {
      SetAsd(data)
    } else {
      if (Object.entries(result).length === 0) {
        SetAsd(AV)
      } else {
        SetAsd(result)
      }
    }
    

  }

  return (
    <div className="container-main rounded-3xl p-4 items-center xl:w-[1000px] sm:w-[700px] w-[370px] xl:h-[570px] sm:h-[700px]">
      <h1 className="text-white text-center font-mono font-bold text-3xl xl:my-2 sm:my-9">
        Proj<span style={{ color: "crimson" }}>ects</span>
      </h1>
      <div className="grid justify-items-center">
        <Input placeholder="Project's name" autoFocus={true} value={valueInput} className="text-white mt-4" width="300px" onChange=
          {e => {
            setvalueInput(e.target.value)
            let valorBuscado = e.target.value
            const result = data.filter(tagles => tagles.title === valorBuscado)
            if (valorBuscado == []) {
              SetAsd(data)
            } else {
              if (Object.entries(result).length === 0) {
                SetAsd(AV)
              } else {
                SetAsd(result)
              }
            }
          }
          }
          onClick={()=>{setCategory(""); setcolor("")}}
        />
        <RadioGroup className="pt-4 justify-around flex gap-x-4 card-category xl:w-[700px] sm:w-[550px] w-[290px] bg-slate-">
          {
            tags.map((cita) => (
                <Button colorScheme={color === cita.value ?'pink':'red'} key={cita.value} variant='outline' size='xs' onClick={() => {
                  let valorBuscado = cita.value
                  setCategory(valorBuscado)
                  setcolor(cita.value)
                  setvalueInput("")
                }}>
                  {cita.label}
                </Button>
            ))
          }
        </RadioGroup>
      </div>
      <div className="container-card grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center xl:mt-4 sm:mt-12 mt-4 ">
        {
          asd.map((cita) => (
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
