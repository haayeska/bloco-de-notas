import { useState} from "react"

import Dropdown from "../ui/Dropdown"
import Input from "../ui/Input"
import Button from "../ui/Button"

const Form = () => {
  const [categoria, setCategoria] = useState("")
  const [descricao, setDescricao] = useState("")

  
  return (
   
   <div className="flex gap-2">
      <Dropdown
        value={categoria}
        onChange={setCategoria}
        options={[
          { label: "Trabalho", value: "work" },
          { label: "Estudo", value: "study" },
          { label: "Pessoal", value: "personal" },
        ]}
      />

      <Input 
        value={descricao}
        onChange={setDescricao}
        placeholder="Descrição"
      />
      
      <Button onClick={() => console.log("Botão clicado!")}>
        Adicionar
      </Button>
    </div>
    
  )

}

export default Form

