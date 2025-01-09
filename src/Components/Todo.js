import Addtask from './Addtask';
import Taskcontainer from './Taskcontainer';
import '../css/Todo.css';
import {useState} from 'react';

export default function Todo(){
    const [tasks,setTasks] = useState(Array(10).fill(null));
    function handleSubmit(){
        
    }
    return(
        <div className='todo'>
            <div className='add-container'>
                <Addtask handleSubmit = {handleSubmit}/>
            </div>
            <div className='task-container'>
                <Taskcontainer/>
            </div>
        
        </div>
    );
}