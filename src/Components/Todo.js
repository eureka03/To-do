import Addtask from './Addtask';
import Taskcontainer from './Taskcontainer';
import '../css/Todo.css';
import {useState} from 'react';

export default function Todo(){
    const [tasks,setTasks] = useState(Array(10));
    const [input,setInput] = useState("");
    function handlechange(event){
        setInput(event.target.value);
    }
    function handleSubmit(event){
        const taskss = tasks.splice();
        taskss.push(input);
        setTasks(taskss)
        event.preventDefault();
        setInput("");
    }
    return(
        <div className='todo'>
            <div className='add-container'>
                <Addtask handlechange = {handlechange} handleSubmit={handleSubmit} input={input}/>
            </div>
            <div className='task-container'>
                <Taskcontainer tasks = {tasks}/>
            </div>
        
        </div>
    );
}