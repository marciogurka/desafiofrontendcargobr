import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchOrganizationInput.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';

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
 * SearchOrganizationInput Component
 * @extends Component
 */
class SearchOrganizationInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearching: false,
      organizationName: ''
    }
  }

  render() {
    return (
      <form onSubmit={this.doSearch}>
        <div className="field has-addons">
          <div className="control">
              <input className="input" type="text" placeholder="Organization name" value={this.state.organizationName} onChange={this.handleInputChange('organizationName')}/>
          </div>
          <div className="control">
            <button type="submit" id="search" className={this.state.isSearching ? 'button is-loading': 'button'} disabled={!this.state.organizationName}>
              <span className="icon is-small">
                <i className="fas fa-search"></i>
              </span>
              <span>Search</span>
            </button>
          </div>
          <ToastContainer autoClose={3000}/>
        </div>
      </form>
    );
  }

  /**
   * Function that gets the organization's members and update the users list
   * @param  {[Object]} event submit event object
   */
  doSearch = event => {
    event.preventDefault();
    if(this.state.organizationName) {
      this.setState({isSearching: true});
      instance.get(`/orgs/${this.state.organizationName}/members`)
        .then(response => {
          this.props.updateUsers(response.data);
          this.setState({isSearching: false});
        })
        .catch(error => {
          toast.error("No organization was found!");
          this.setState({isSearching: false});
        });
    } else {
      toast.warning("You should write an organization name!");
    }
  }

  handleInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
}

SearchOrganizationInput.defaultProps = {
  isSearching: false,
  updateUsers: () => {},
};

SearchOrganizationInput.propTypes = {
  updateUsers: PropTypes.func.isRequired,
  isSearching: PropTypes.bool,
};

export default SearchOrganizationInput;
