import React from 'react';
import AddTodo from './addTodo';
import { toast } from 'react-toastify';

class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homeword' },
            { id: 'todo2', title: 'Making video' },
            { id: 'todo3', title: 'Fixing bugs' }
        ],
        editTodo: {}
    }

    addTodo = (item) => {
        let currentToDoList = [...this.state.listTodos, item];
        this.setState({
            listTodos: currentToDoList
        })
        toast.success("Wow so easy!");
    }

    handleEdit = (item) => {
        let { editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        if (isEmptyObj === true) {
            this.setState({
                editTodo: item
            })
        } else {
            let toDoList = [...this.state.listTodos];
            let index = toDoList.findIndex(element => element.id === item.id);
            toDoList[index].title = editTodo.title;
            this.setState({
                listTodos: toDoList,
                editTodo: {}
            })
            toast.success("Update todo succeed!");
        }
    }

    handleOnChangeEdit = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    handleDelete = (item) => {
        let currentToDoList = [...this.state.listTodos];
        currentToDoList = currentToDoList.filter(value => value.id !== item.id);
        this.setState({
            listTodos: currentToDoList
        })
        toast.success("Successful delete");
    }

    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        return (
            <>
                <p>Simple TODO Apps with React.js</p>
                <div className='list-todo-container'>
                    <AddTodo
                        addTodo={this.addTodo}
                    />
                    <div className='list-todo-content'>
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div key={item.id} className="todo-child">
                                        {isEmptyObj === true ?
                                            <span>{index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>{index + 1} - <input value={editTodo.title}
                                                        onChange={(event) => this.handleOnChangeEdit(event)} />

                                                    </span>
                                                    :
                                                    <span>{index + 1} - {item.title}</span>
                                                }
                                            </>
                                        }

                                        <button className='edit'
                                            onClick={() => this.handleEdit(item)}>
                                            {isEmptyObj === false && editTodo.id === item.id ? "Save" : "Edit"}
                                        </button>
                                        <button className='delete'
                                            onClick={() => this.handleDelete(item)}>Delete</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default ListTodo;