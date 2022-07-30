import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Swal from 'sweetalert2';
import { Tabs, Tab } from "react-bootstrap";
import Add from './Component/Add/Add';
import Active from './Component/Active/Active';
import Completed from './Component/Completed/Completed';
import {useState} from 'react'
function App() {
  const [toDos,setToDos]=useState([])
  const [newTodo,setNewTodo] = useState('')


  const addNewTask = ()=>{
    if (newTodo === "") return;
    let newTodos = [
      {
        id:Date.now(),text:newTodo,checked:false,completed:false
      },...toDos,
    ]
    setToDos(newTodos)
    setNewTodo("")
  }


  // Active Todo app
  const checkTodo = (id)=>{

    let newTodos =toDos.filter((todo)=>{
      if (todo.id === id){
        todo.checked = todo.checked?false: true;
      }
      return todo
    })
    setToDos(newTodos)
  }

  // Completed Todo app
  const completedTodo = (id)=>{

    let newTodos = toDos.filter((todo)=>{
      if (todo.id === id) {
        todo.completed = todo.completed?false: true;
      }
      return todo;
    })
    setToDos(newTodos)
  }


  //Edit Todo App
  const editTodo = async (id) => {
    const { value: editedTask } = await Swal.fire({
      title: "Rename Task",
      input: "text",
      inputValue:toDos.find((todo)=>todo.id === id).text,
      inputPlaceholder: "Enter Here",
    });

    if (editedTask) {
      let newTodos =toDos.filter((todo) => {
        if (todo.id === id) {
          todo.text = editedTask;
        }
        return todo;
      })
      setToDos(newTodos);

    }
  };
  
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card" id="list1">
              <div className="card-body py-4 px-4 px-md-5">

                <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                  <i className="fas fa-check-square me-1"></i>
                  <u>My Todo-s</u>
                </p>

                <div className="pb-2">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-row align-items-center">
                        <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} className="form-control form-control-lg" id="exampleFormControlInput1"
                          placeholder="Add new..." />
                        <a href="#!"  data-mdb-toggle="tooltip" title="Set due date"></a>
                        <div>
                          <button onClick={addNewTask} type="button" className="btn btn-primary">Add</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Tabs defaultActiveKey="Home" id="controlled-tab-example">
                  <Tab eventKey="Home" title="New Added">


                    <Add checkTodo={checkTodo} toDos={toDos} completedTodo={completedTodo} editTodo={editTodo}/>

                  </Tab>
                  <Tab eventKey="profile" title="Completed">
                    <Active toDos={toDos} checkTodo={checkTodo} completedTodo={completedTodo} editTodo={editTodo}/>
                  </Tab>
                  <Tab eventKey="contact" title="Dropped">
                    <Completed toDos={toDos} completedTodo={completedTodo}/>
                  </Tab>
                </Tabs>
               




              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
