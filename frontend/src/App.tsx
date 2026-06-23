import Form from './components/tasks/Form'
import TaskList from './components/tasks/TaskList'

function App() {
  
  return (
    <div className="flex flex-col gap-2 p-5">
      <h1>Bloco de Notas</h1>
      <Form />
      <TaskList />
    </div>
    
  )
}

export default App
