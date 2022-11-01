import React from "react";
import "../../styles/childComponent.scss"

//class component
class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        console.log(job);
        this.props.deleteJob(job);
    }

    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>
                            Show
                        </button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}$
                                            <span className="icon" onClick={() => this.handleOnClickDelete(item)}>
                                                x
                                            </span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>
                                Hide
                            </button>
                        </div>
                    </>
                }
            </>
        )
    }
}

// function component

// const ChildComponent = (props) => {
//     console.log("check props", props);
//     const { arrJobs } = props;
//     return (
//         <>
//             <div>Hello arrow function</div>
//             <div className="job-lists">
//                 {
//                     arrJobs.map((item) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>

//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }

export default ChildComponent;