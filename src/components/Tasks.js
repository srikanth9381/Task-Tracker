import Task from './Task'


const Tasks = (props) => {
    return (
        <>
        {   props.tasks.length === 0
            ? <p>No Tasks to show!</p> 
            : props.tasks.map(
                (task)=>(
                <Task key = {task.id}
                task = {task}
                onDelete = {props.onDelete} 
                onToggle = {props.onToggle}/>
                )
                )
        }
        </>
    )
}

export default Tasks
