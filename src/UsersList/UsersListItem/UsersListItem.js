import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './UsersListItem.css';
import axios from 'axios';
import { MdRemoveShoppingCart, MdAddShoppingCart } from 'react-icons/md';

/**
 * Creates a new axios instance with Github API config
 * @type {Object}
 */
const instance = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 10000,
  headers: {'Accept': 'application/vnd.github.v3+json'}
});


/**
 * UsersListItem Component
 * @extends Component
 */
class UsersListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: '',
        login: '',
        followers: 0,
      }
    }
  }

  componentDidMount = () => {
    instance.get(this.props.user.url)
      .then(response => {
        this.setState({userInfo: response.data});
      })
      .catch(error => {
        console.error("error getting the user info!");
      });
  }
  render() {
    return (
        <div className="column is-half">
          <div className={this.props.user.isSelected ? 'box is-selected' : 'box'}>
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={this.props.user.avatar_url} alt="Profile Image"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{ this.state.userInfo.name }</strong> <small>@{this.state.userInfo.login}</small>
                  </p>
                </div>
                <nav className="level is-mobile">
                  <div className="level-left">
                    <a className="level-item" aria-label="price" onClick={() => this.props.updateUserStatus(!this.props.user.isSelected)}>
                      R${this.state.userInfo.followers.toFixed(2)}
                    </a>
                  </div>
                  <div className="level-right">
                    <a className="level-item" aria-label="icon" onClick={() => this.props.updateUserStatus(!this.props.user.isSelected)}>
                      <span className="icon is-small">
                        {
                          this.props.user.isSelected ?
                          <MdRemoveShoppingCart/>
                          :
                          <MdAddShoppingCart/>
                        }
                      </span>
                    </a>
                  </div>
                </nav>
              </div>
            </article>
          </div>
        </div>
    );
  }
}

UsersListItem.defaultProps = {
  user: {},
};

UsersListItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UsersListItem;
