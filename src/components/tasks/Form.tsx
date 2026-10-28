import { useState } from "react"

import Select from "../ui/Select"
import Input from "../ui/Input"
import Button from "../ui/Button"
import { CATEGORIAS, type Categoria } from "../../types"

type FormProps = {
  onAdicionar: (descricao: string, categoria: Categoria) => void
}

// Devolve a mensagem de erro, ou null quando os campos estão válidos
const LIMITE_DESCRICAO = 120

function validar(descricao: string, categoria: string): string | null {
  const texto = descricao.trim()
  if (!texto) return "Escreva o que você precisa fazer."
  if (texto.length > LIMITE_DESCRICAO) return `A descrição pode ter no máximo ${LIMITE_DESCRICAO} caracteres.`
  if (!categoria) return "Escolha uma categoria."
  return null
}

const Form = ({ onAdicionar }: FormProps) => {
  const [categoria, setCategoria] = useState("")
  const [descricao, setDescricao] = useState("")
  const [erro, setErro] = useState<string | null>(null)

  const enviar = (e: React.FormEvent) => {
    e.preventDefault()
    const mensagem = validar(descricao, categoria)
    setErro(mensagem)
    if (mensagem) return

    onAdicionar(descricao, categoria as Categoria)
    setDescricao("")
  }

  return (
    <form onSubmit={enviar} className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 sm:flex-row">
        <Select
          aria-label="Categoria"
          value={categoria}
          onChange={setCategoria}
          textoVazio="Categoria"
          opcoes={CATEGORIAS.map((c) => ({ rotulo: c.rotulo, valor: c.valor }))}
          className="sm:w-40"
        />

        <Input
          aria-label="Descrição da tarefa"
          value={descricao}
          onChange={setDescricao}
          placeholder="O que você precisa fazer?"
          className="flex-1"
        />

        <Button type="submit">Adicionar</Button>
      </div>

      {erro && (
        <p role="alert" className="text-sm text-red-600">
          {erro}
        </p>
      )}
    </form>
  )
}

export default Form
