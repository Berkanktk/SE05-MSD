import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useEffect, useState} from 'react'

function App() {
    const [showAdd, setShowAdd] = useState(false)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const getTasks = async () => {
            const data = await fetchTasks()
            setTasks(data)
        }

        getTasks().then(r => console.log("Fetched Data!"))
    }, [])


    // Fetch Tasks
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
            .catch(error => alert("You forgot to start the JSON server. See the Readme.md"))
        return res.json();
    }

    // Delete Task
    const deleteTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE',
        })
        res.status === 200
            ? setTasks(tasks.filter((task) => task.id !== id))
            : alert('Error')
    }

    // Add Task
    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(task),
        })

        const data = await res.json()

        setTasks([...tasks, data])
    }

  return (
    <div className="App">
        <Header
            onAdd={() => setShowAdd(!showAdd)}
            showAdd={showAdd}
        />
        {showAdd ? <AddTask onAdd={addTask} /> : ""}
        <Tasks
            tasks={tasks}
            onDelete={deleteTask}
        />
    </div>
  );
}

export default App;
