import { CATEGORIAS, type Tarefa } from "../../types"
import Button from "../ui/Button"

type TaskListProps = {
  tarefas: Tarefa[]
  onAlternar: (id: string) => void
  onRemover: (id: string) => void
}

const TaskList = ({ tarefas, onAlternar, onRemover }: TaskListProps) => {
  if (tarefas.length === 0) {
    return (
      <p className="rounded-md border border-dashed border-gray-300 p-6 text-center text-sm text-gray-500">
        Nenhuma tarefa por aqui. Adicione a primeira acima.
      </p>
    )
  }

  return (
    <ul className="flex flex-col gap-2">
      {tarefas.map((tarefa) => {
        const categoria = CATEGORIAS.find((c) => c.valor === tarefa.categoria)

        return (
          <li
            key={tarefa.id}
            className="flex items-center gap-3 rounded-md border border-gray-200 bg-white px-3 py-2 shadow-sm"
          >
            <input
              type="checkbox"
              checked={tarefa.feita}
              onChange={() => onAlternar(tarefa.id)}
              aria-label={`Marcar "${tarefa.descricao}" como feita`}
              className="size-4 accent-violet-600"
            />

            <span className={`flex-1 text-sm ${tarefa.feita ? "text-gray-400 line-through" : "text-gray-800"}`}>
              {tarefa.descricao}
            </span>

            {categoria && (
              <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${categoria.cor}`}>
                {categoria.rotulo}
              </span>
            )}

            <Button
              variante="discreto"
              onClick={() => onRemover(tarefa.id)}
              aria-label={`Apagar "${tarefa.descricao}"`}
              className="px-2 py-1"
            >
              ✕
            </Button>
          </li>
        )
      })}
    </ul>
  )
}

export default TaskList
