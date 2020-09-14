import React from 'react';

import { useForm } from 'react-hook-form';

function CreateTask(props) {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        props.addTask(data);
        e.target.reset();
    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h3>Create Task</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input type="text" name="responsable" placeholder="responsable" className="form-control" ref={
                                register({
                                    required: {value: true, message: 'Required'}
                                })
                            }/>
                            <div>
                                {errors?.responsable?.message}
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="text" name="description" placeholder="description" className="form-control" ref={
                                register({
                                    required: {value: true, message: 'Required'}
                                })
                            }/>
                            <div>
                                {errors?.description?.message}
                            </div>
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
