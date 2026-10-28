import { useState } from "react"

import Form from "./components/tasks/Form"
import TaskList from "./components/tasks/TaskList"
import Button from "./components/ui/Button"
import { useTarefas } from "./hooks/useTarefas"
import { CATEGORIAS, type Categoria } from "./types"

type Filtro = Categoria | "todas"

function App() {
  const { tarefas, adicionar, alternar, remover, limparFeitas } = useTarefas()
  const [filtro, setFiltro] = useState<Filtro>("todas")

  const visiveis = filtro === "todas" ? tarefas : tarefas.filter((t) => t.categoria === filtro)
  const pendentes = tarefas.filter((t) => !t.feita).length
  const temFeitas = tarefas.some((t) => t.feita)

  const filtros: { valor: Filtro; rotulo: string }[] = [
    { valor: "todas", rotulo: "Todas" },
    ...CATEGORIAS.map((c) => ({ valor: c.valor, rotulo: c.rotulo })),
  ]

  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-5 px-4 py-10">
      <header>
        <h1 className="text-2xl font-bold text-gray-900">Bloco de Notas</h1>
        <p className="text-sm text-gray-500">
          {pendentes === 0 ? "Tudo em dia!" : `${pendentes} ${pendentes === 1 ? "tarefa pendente" : "tarefas pendentes"}`}
        </p>
      </header>

      <Form onAdicionar={adicionar} />

      <nav aria-label="Filtrar por categoria" className="flex flex-wrap items-center gap-1">
        {filtros.map((f) => (
          <Button
            key={f.valor}
            variante={filtro === f.valor ? "primario" : "discreto"}
            aria-pressed={filtro === f.valor}
            onClick={() => setFiltro(f.valor)}
            className="px-3 py-1"
          >
            {f.rotulo}
          </Button>
        ))}

        {temFeitas && (
          <Button variante="discreto" onClick={limparFeitas} className="ml-auto px-3 py-1">
            Limpar feitas
          </Button>
        )}
      </nav>

      <TaskList tarefas={visiveis} onAlternar={alternar} onRemover={remover} />
    </main>
  )
}

export default App
