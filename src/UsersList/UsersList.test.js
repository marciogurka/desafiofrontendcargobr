import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './UserList';
import {shallow, mount} from 'enzyme';
import {ToastContainer} from 'react-toastify';
import sinon from 'sinon';

describe('UsersList', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserList/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
