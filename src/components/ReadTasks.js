import React from 'react';

function ReadTasks(props) {
    return (  
        <div className="container">
            <table className="table table-hover">
                <thead>
                <tr>
                    <td>ID</td>
                    <td>Responsable</td>
                    <td>Description</td>
                    <td>Actions</td>
                </tr>
                </thead>
                <tbody>
                {props.tasks.length > 0 ?
                    props.tasks.map((task) =>
                    <tr key={task.id}>
                        <td>{ task.id }</td>
                        <td>{task.responsable }</td>
                        <td>{task.description }</td>
                        <td>
                            <button className="btn btn-warning">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    ) : (
                        <tr>
                           <td colSpan={3}>No Tasks</td> 
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
}
 
export default ReadTasks;