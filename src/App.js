import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState, useEffect} from 'react'
import Footer from './components/Footer'
import About from './components/About'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {


  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
      
    const getTasks =  async() => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer);
    }

    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  }



    const addTask = async (task) => {
      // var id = Math.floor(Math.random()*10000) + 1;
      // const newTask = {id, ...task };
      // setTasks([...tasks, newTask]);

      const res = await fetch('http://localhost:5000/tasks',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(task)
        })

        const data = await res.json()
        setTasks([...tasks, data]);
    }

    const ShowAddTask = (data)=> {
      setShowAddTask(data);
    }

    const delTask = async (id)=> {

      await fetch(`http://localhost:5000/tasks/${id}`, {method : 'DELETE',})

      setTasks(tasks.filter((task) => task.id!==id));
    }

    const toggleRemainder = async (id)=>{

      const taskToToggle = await fetchTask(id);
      const updTask = {
        ...taskToToggle, remainder: !taskToToggle.remainder
      }

      const res = await fetch(`http://localhost:5000/tasks/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
      })

      const data = await res.json()

      setTasks(tasks.map((task) => task.id === id?
        {...task, remainder: data.remainder} : task)
        )
    }

  return (
    <Router>
        <div className="container">
        <Header onAdd = {() => ShowAddTask(!showAddTask)} showAddTask = {showAddTask}/>
        
        <Route path = '/' exact render = {(props) => (<>
          
          {showAddTask && <AddTask onSubmit = {addTask}/>}
          <Tasks tasks = {tasks} onDelete = {delTask} onToggle = {toggleRemainder} />
        
         </>) } />

        <Route path = '/about' component = {About}/>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
