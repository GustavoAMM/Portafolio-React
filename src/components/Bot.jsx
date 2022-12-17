/* import { Button } from "@chakra-ui/react";
import { data } from "../data/data"
import { useState } from 'react'


function Bot({quede}){
    const [asd, SetAsd] = useState(data)
    console.log(quede)
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
    return(
        <Button bg={quede.color} variant='outline' size='xs' onClick={() => {
            let valorBuscado = quede.value
            setCategory(valorBuscado)
          }}>
            {quede.label}
          </Button>
    )
}
export default Bot */