import React from 'react';
import { withRouter } from "react-router";
import axios from 'axios';
class DetailUser extends React.Component {

  state = {
    user: {}
  }

  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {}
      })
    }
  }

  handleOnClick = () => {
    this.props.history.push('/user');
  }

  render() {
    let { user } = this.state;
    let isEmptyObj = Object.keys(user).length === 0;
    return (
      <>
        <div>Hello world from detail user with id: {this.props.match.params.id}</div>
        <div>
          {isEmptyObj === false &&
            <>
              <div>User's name: {user.first_name} - {user.last_name}</div>
              <div>User's email: {user.email}</div>
              <div>
                <img src={user.avatar} alt="img" />
              </div>
              <div>
                <button type='button' onClick={() => this.handleOnClick()}>Back</button>
              </div>
            </>
          }
        </div>
      </>

    )
  }
}

export default withRouter(DetailUser);