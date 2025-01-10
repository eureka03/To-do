import Task from './Task';
export default function TaskList({tasks,input}){

    return (
        <div>
        {tasks.map(task=>
            <Task title={task.title}/>
        )}
        
        </div>
    );
}