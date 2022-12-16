import "./style/carrusel.css";
import Card from "./Card";
import { Input } from "@chakra-ui/react";
import {data} from "../data/data"
import {useState} from 'react'




function Carrusel() {

  const [asd, SetAsd ] = useState(data)
  let AV = [""]

  return (
    <div className="container-main rounded-3xl p-4 items-center">
      <h1 className="text-white text-center font-mono font-bold text-3xl my-4">
        Proj<span style={{ color: "crimson" }}>ects</span>
      </h1>
      <div className="grid justify-items-center">
        <Input placeholder="Programming language" autoFocus={true} className="text-white focus:" width="400px" onChange=
        { e=> {
          /* if(e.target.value == ""){
            SetAsd(data)
          }else{
          setFilter(e.target.value)} */ 
          let valorBuscado = e.target.value
          const result = data.filter(tagles => tagles.title === valorBuscado)

          if (valorBuscado == []){
            SetAsd(data)
          }else{
            if(Object.entries(result).length === 0){
              SetAsd(AV)
            }else{
              SetAsd(result)
            }
          }
       
        }
        }
        />
      </div>
    
      {/* en el buscado escribir la palabra y hacer el llamado con ese valor en el js */}
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
