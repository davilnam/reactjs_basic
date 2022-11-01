import React from 'react';
import '../../styles/ListTodo.scss';
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    state = {
        id: '',
        title: ''
    }

    handleChange = (event) => {
        this.setState({
            id: Math.floor(Math.random() * 1001),
            title: event.target.value
        })
    }

    handleOnClick = () => {
        if (this.state.id && this.state.title) {
            console.log(this.state);
            this.props.addTodo(this.state);
            this.setState({
                id: '',
                title: ''
            })
        } else {
            toast.error("Missing title's Todo!");
        }
    }
    render() {
        return (
            <div className='add-todo'>
                <input type="text" className='input' value={this.state.title}
                    onChange={(event) => this.handleChange(event)} />
                <button type="submit" onClick={() => this.handleOnClick()}>
                    Add
                </button>
            </div>
        )
    }
}

export default AddTodo;