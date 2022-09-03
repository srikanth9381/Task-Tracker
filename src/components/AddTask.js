import {useState} from 'react'

const AddTask = ({onSubmit}) => {


    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [remainder, setRemainder] = useState(false);
   


    const OnSubmit = (e) => {
        e.preventDefault();

        if(!text){
            alert('please add a task.');
            return;
        }

        onSubmit({text, day, remainder});

        setText('');
        setDay('');
        setRemainder(false);
        
    }
    return (
        <form className =  'add-form' onSubmit = {OnSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type = 'text' placeholder = 'Add Task' value = {text} onChange = {(e)=>setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type = 'text' placeholder = 'Add Day and time' value = {day} onChange = {(e)=>setDay(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Remainder</label>
                <input type = 'checkbox' checked={remainder} value = {remainder} onChange = {(e)=>setRemainder(e.currentTarget.checked)}/>
            </div>

            <input className = 'btn btn-block' type = 'submit' value = 'Save Task'/>

        </form>
    )
}

export default AddTask
