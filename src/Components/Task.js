import '../css/Task.css';
import {useState} from 'react';
export default function Task(){
   
    return(
        <div className='task'>
            <div className='task-id'>
                <h2>Task 1</h2>
            </div>
            <div className='update'>
                <button>V</button>
                <button>X</button>
            </div>
        </div>
    );
}