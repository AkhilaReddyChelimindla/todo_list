import './CSS/TodoItems.css'
import tick from './Assets/tick.png';
import cross from './Assets/cross.png';
import not_tick from './Assets/not_tick.png';

const TodoItems = ({no,display,text,setTodos}) => {

  const deleteItem = (no) =>{
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no!==no);
    setTodos(data);
  }


  const toggle = () =>{
    let data = JSON.parse(localStorage.getItem("todos"));
    for(let i=0;i<data.length;i++){
        if(data[i].no===no){
            if(data[i].display===""){
                data[i].display="line-through";
            }
            else{
                data[i].display="";
            }
            break;
        }
    }
    setTodos(data);
  }
  return (
    <div className='todoItems'>
        <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
            {display===""?<img src={not_tick} alt="" width="30px" />: <img src={tick} alt="" width="30px"/>}
            <div className="todoItems-text">{text}</div>
        </div>
        <img className="todoitems-crossicon" src={cross} alt="" width="30px" onClick={()=>{deleteItem(no)}}/>
    </div>
  )
}

export default TodoItems