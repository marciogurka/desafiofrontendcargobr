import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/NavBar';
import SearchOrganizationInput from './SearchOrganizationInput/SearchOrganizationInput';
import UsersList from './UsersList/UsersList';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      usersList: [

      ],
      choosenUsers: [],
    }
  }

  render() {
    return (
      <div>
        <Navbar/>
        <section className="section">
          <div className="container">
              <h1 className="title">
                Github
                </h1>
                <SearchOrganizationInput updateUsers={(usersList) => this.updateUsers(usersList)}/>
                <UsersList usersList={this.state.usersList} updateUserStatus={(index, state) => this.updateUserStatus(index, state)} />
            </div>
        </section>
      </div>
    );
  }

  updateUsers = usersList => {
    this.setState({usersList: usersList});
  }

  updateUserStatus = (index, state) => {
    const newUserList = this.state.usersList.slice();
    newUserList[index].isSelected = state;
    this.setState({
      usersList: newUserList
    });
  }
}

export default App;
