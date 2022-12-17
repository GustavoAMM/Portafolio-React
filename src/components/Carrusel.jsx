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
    <div className="container-main rounded-3xl p-4 items-center">
      <h1 className="text-white text-center font-mono font-bold text-3xl my-4">
        Proj<span style={{ color: "crimson" }}>ects</span>
      </h1>
      <div className="grid justify-items-center">
        <Input placeholder="Project's name" autoFocus={true} value={valueInput} className="text-white focus:" width="400px" onChange=
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
        <RadioGroup defaultValue='2' className="pt-4 flex gap-x-4">
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
      <div className="container-card grid grid-cols-3 justify-items-center mt-4">
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
