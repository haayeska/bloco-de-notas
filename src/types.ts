export type Categoria = "trabalho" | "estudo" | "pessoal"

export type Tarefa = {
  id: string
  descricao: string
  categoria: Categoria
  feita: boolean
  criadaEm: number
}

export const CATEGORIAS: { valor: Categoria; rotulo: string; cor: string }[] = [
  { valor: "trabalho", rotulo: "Trabalho", cor: "bg-sky-100 text-sky-800" },
  { valor: "estudo", rotulo: "Estudo", cor: "bg-amber-100 text-amber-800" },
  { valor: "pessoal", rotulo: "Pessoal", cor: "bg-emerald-100 text-emerald-800" },
]
