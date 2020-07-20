import React from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput.jsx'

const baseUrl = 'https://crudcrud.com/api/211c2dd21b9e411aa56841c09e959046/tasks';


class TasksList extends React.Component {
    state = {
        tasks: [],
    }

    componentDidMount() {
        this.hetchTasksList()
    }

    hetchTasksList = () => {
        fetch(baseUrl).then(res => {
            if (res.ok) {
                return res.json()
            }
        })
            .then(tasksList => {
                const tasks = tasksList.map(({ _id, ...task }) => ({
                    id: _id,
                    ...task,
                }))
                this.setState({
                    tasks,
                });
            })
    }



    onCreate = text => {
        //create task obj +
        //post obj to server +
        //fetch
        // const { tasks } = this.state
        const newTask = {
            id: Math.random(),
            text,
            done: false
        }

        fetch(baseUrl, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json;utc-8'
            },
            body: JSON.stringify(newTask)
        }).then(response => {
            if (response.ok) {
                this.hetchTasksList()
            } else {
                throw new Error('Faild to create task')
            }
        })

        // const updatedTasks = tasks.concat(newTask)
        // this.setState({ tasks: updatedTasks });
    }

    handleTaskStatusChange = id => {
        // find tasks in a list 
        // toggle done value
        // save updated list
        const updatedTasks = this.state.tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    done: !task.done
                };
            };
            return task;
        });
        this.setState({ tasks: updatedTasks })
    }

    handleTaskDelete = id => {
        fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
        }).then(response => {
            if (response.ok) {
                this.hetchTasksList()
            } else {
                throw new Error('Faild to create task')
            }
        })
    };


    render() {
        const sortedList = this.state.tasks
            .slice()
            .sort((a, b) => a.done - b.done)
        return (
            <div className="todo-list">
                <CreateTaskInput onCreate={this.onCreate} />
                <ul className="list">
                    {sortedList.map(task => (
                        <Task
                            key={task.id}
                            {...task}
                            onDelete={this.handleTaskDelete}
                            onChange={this.handleTaskStatusChange}
                        />
                    ))}

                </ul>
            </div>
        )
    }
}

export default TasksList;