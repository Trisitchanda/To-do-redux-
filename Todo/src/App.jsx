
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="neon-border-wrapper">
        <div className="neon-border-inner space-y-6">

          <AddTodo />
          <Todo />

        </div>
      </div>
    </div>
  )
}

export default App
