import '../css/Addtask.css';
export default function Addtask({handlechange,handleSubmit,input}){
    return(
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Add task' value={input} onChange={handlechange}required/>
                <button>+ Add</button>
            </form>
        </div>
    );
}