import Button from './Button'
import {useLocation} from 'react-router-dom'

const Header = (props) => {

    const loc = useLocation();
    
    return (
        <header className = 'header'>
            <h1>Task Tracker</h1>
           {loc.pathname ==='/' && <Button
             color = {props.showAddTask ? 'red' : 'green'}
             text = {props.showAddTask? 'Close': 'add'}
             onClick = {() => props.onAdd()}
            />}
        </header>
    )
}

export default Header