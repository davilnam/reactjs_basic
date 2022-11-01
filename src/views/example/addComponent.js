import React from 'react';
import { toast } from 'react-toastify';

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }

    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleClickSubmit = (event) => {
        event.preventDefault();
        if (!this.state.title || !this.state.salary) {
            toast.error("Missing required params!");
        } else {
            this.props.addNewJob(
                {
                    id: Math.floor(Math.random() * 1010),
                    title: this.state.title,
                    salary: this.state.salary
                }
            );
            this.setState({
                title: '',
                salary: '',
            })
        }
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">Job's title:</label><br />
                <input type="text" value={this.state.title}
                    onChange={(event) => this.handleChangeTitleJob(event)} />
                <br />
                <label htmlFor="lname">Salary:</label><br />
                <input type="text" value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)} />
                <br />
                <input type="submit" onClick={(event) => this.handleClickSubmit(event)} />
            </form>
        )
    }
}

export default AddComponent;