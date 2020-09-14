import React from 'react';

function CreateTask(props) {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h3>Create Task</h3>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <input type="text" name="responsable" placeholder="responsable" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="description" placeholder="description" className="form-control" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-success">Create Task</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateTask
