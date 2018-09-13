import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './UsersList.css';
import UsersListItem from './UsersListItem/UsersListItem';

/**
 * UsersList Component
 * @extends Component
 */
class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="columns user-list">
        {
          this.props.usersList.map((user, i) => {
           return <UsersListItem user={user} key={i} updateUserStatus={(state) => this.props.updateUserStatus(i, state)} />
          })
        }
      </div>
    );
  }
}

UsersList.defaultProps = {
  usersList: []
};

UsersList.propTypes = {
  usersList: PropTypes.array.isRequired
};

export default UsersList;
