import '../css/Addtask.css';
export default function Addtask(){
    return(
        <div className='form'>
            <form>
                <input type='text' placeholder='Add task' required/>
                <button>Add</button>
            </form>
        </div>
    );
}