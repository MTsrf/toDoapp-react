import React from 'react'
import './Completed.css'
function Completed({ toDos ,completedTodo }) {
    return (
        <div>
            {
                toDos.map(({ id, text, checked, completed }) => {
                    if (!completed) return null;

                    return (
                        <ul className="list-group list-group-horizontal rounded-0 bg-transparent">
                          
                            <li
                                className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                                <p className="lead fw-normal mb-0">{text}</p>
                            </li>
                            <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                                <div className="d-flex flex-row justify-content-end mb-1">
                                    <a href="#!" className="text-info" data-mdb-toggle="tooltip" title="Edit todo"><i
                                        className="fas fa-pencil-alt me-3"></i></a>
                                    <a onClick={()=>(completedTodo(id))} className="text-danger" data-mdb-toggle="tooltip" title="Delete todo"><i 
                                        className="fas fa-trash-alt"></i></a>
                                </div>
                                <div className="text-end text-muted">
                                    <a href="#!" className="text-muted" data-mdb-toggle="tooltip" title="Created date">
                                        <p className="small mb-0"><i className="fas fa-info-circle me-2"></i>28th Jun 2020</p>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    )
                })
            }

        </div>
    )
}

export default Completed
