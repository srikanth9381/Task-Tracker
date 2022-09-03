import {FaTimes} from 'react-icons/fa'

const Task = (props) => {
    return (
        <div className = {props.task.remainder ? 'task remainder' : 'task'} onDoubleClick = {() => props.onToggle(props.task.id)}>
            <h3>
                {props.task.text} 
                <FaTimes 
                    style={{color: 'red', cursor: 'pointer'}}
                    onClick = {() => props.onDelete(props.task.id)}
                />
            </h3>
            <p>{props.task.day}</p>
        </div>
    )
}

export default Task

