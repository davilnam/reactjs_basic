import React from 'react';
import "../../styles/global.scss";
import ChildComponent from './childComponent';
import AddComponent from './addComponent';
import { toast } from 'react-toastify';

/**
 * JSX => return block
 *  fragment 
 */

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: 'job1', title: 'Developers', salary: 500 },
            { id: 'job2', title: 'Testers', salary: 400 },
            { id: 'job3', title: 'Project manager', salary: 1100 }
        ]
    }

    addNewJob = (job) => {
        let currentJobs = [...this.state.arrJobs, job];
        this.setState({
            arrJobs: currentJobs
        })
        toast.success("Wow so easy!");
    }

    deleteJob = (job) => {
        let currentJobs = [...this.state.arrJobs];
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
        })
        toast.success("Successful delete");
    }

    render() {
        console.log(this.state);
        return (

            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />
            </>
        )

    }
}

export default MyComponent;