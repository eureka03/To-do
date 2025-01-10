import Addtask from './Addtask';
import Taskcontainer from './Taskcontainer';
import '../css/Todo.css';
import {useState} from 'react';

export default function Todo(){
    const [tasks,setTasks] = useState([]);
    const [input,setInput] = useState("");
    const [count,setCount] = useState(1);

    function handlechange(event){
        const value = event.target.value;
        setInput(value);
        
    }
    function handleSubmit(event){
        let newItem = {
            id:count,
            title:input
        }
        setTasks([...tasks,newItem]);
        event.preventDefault();
        setInput("");
        setCount(count+1);
    }
    function handleDelete(event){
        const newArray = tasks.slice();
        newArray.splice()

    }

    return(
        <div className='todo'>
            <div className='add-container'>
                <Addtask handlechange = {handlechange} handleSubmit={handleSubmit} input={input}/>
            </div>
            <div className='task-container'>
                <Taskcontainer tasks = {tasks} input={input}/>
            </div>
        
        </div>
    );
}