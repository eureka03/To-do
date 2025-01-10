import '../css/Task.css';
import {useState} from 'react';

export default function Task({title,handleDelete,handleCommit}){
   
    return(
        <div className='task'>
            <div className='task-id'>
                <h2>{title}</h2>
            </div>
            <div className='update'>
                <button onClick = {handleCommit}>V</button>
                <button onClick = {handleDelete}>X</button>
            </div>
        </div>
    );
}