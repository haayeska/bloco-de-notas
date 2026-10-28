import { useEffect, useState } from "react"
import type { Categoria, Tarefa } from "../types"

const CHAVE = "bloco-de-notas:tarefas"


function carregar(): Tarefa[] {
  try {
    const salvo = localStorage.getItem(CHAVE)
    return salvo ? JSON.parse(salvo) : []
  } catch {
    return []
  }
}

export function useTarefas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>(carregar)

  useEffect(() => {
    try {
      localStorage.setItem(CHAVE, JSON.stringify(tarefas))
    } catch {
      // sem armazenamento, a lista vale só enquanto a página estiver aberta
    }
  }, [tarefas])

  const adicionar = (descricao: string, categoria: Categoria) => {
    const nova: Tarefa = {
      id: crypto.randomUUID(),
      descricao: descricao.trim(),
      categoria,
      feita: false,
      criadaEm: Date.now(),
    }
    setTarefas((atuais) => [nova, ...atuais])
  }

  const alternar = (id: string) => {
    setTarefas((atuais) =>
      atuais.map((t) => (t.id === id ? { ...t, feita: !t.feita } : t)),
    )
  }

  const remover = (id: string) => {
    setTarefas((atuais) => atuais.filter((t) => t.id !== id))
  }

  const limparFeitas = () => {
    setTarefas((atuais) => atuais.filter((t) => !t.feita))
  }

  return { tarefas, adicionar, alternar, remover, limparFeitas }
}
