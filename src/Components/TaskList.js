import Task from './Task';
export default function TaskList({tasks}){

    return (
        <div>
        {tasks.map(task=>
            <Task/>
        )}
        
        </div>
    );
}