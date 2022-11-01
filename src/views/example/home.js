import React from 'react';
// import { withRouter } from "react-router";
import Color from '../HOC/color';
import image from '../../assets/images/marin.jpg';
import './home.scss';
import { connect } from 'react-redux';
//HOC: higher order component

class Home extends React.Component {
  handleDeleteUser = (user) => {
    console.log(user);
    this.props.deleteUserRedux(user);
  }

  handleCreateUser = () => {
    this.props.createUserRedux();
  }

  render() {
    let listUser = this.props.dataRedux;
    console.log("check props: ", this.props);
    return (
      <>
        <p>Hello world from Homepage</p>
        <img src={image} alt="magrin" />
        <div>
          {listUser && listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name}
                  <span className='deleteUser' onClick={() => this.handleDeleteUser(item)}>x</span>
                </div>
              )
            })
          }
        </div>
        <button type='button' onClick={() => this.handleCreateUser()}>
          Add new
        </button>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) => dispatch({
      type: 'DELETE_USER',
      payload: userDelete
    }),
    createUserRedux: () => dispatch({
      type: 'CREATE_USER'
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));