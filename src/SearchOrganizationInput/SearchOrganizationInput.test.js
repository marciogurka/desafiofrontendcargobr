import React from 'react';
import ReactDOM from 'react-dom';
import SearchOrganizationInput from './SearchOrganizationInput';
import {shallow, mount} from 'enzyme';
import {ToastContainer} from 'react-toastify';
import sinon from 'sinon';

describe('SearchOrganizationInput', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchOrganizationInput/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('when the input search is empty', () => {
    it('should have the search button disabled', () => {
      const wrapper = shallow(<SearchOrganizationInput/>);
      expect(wrapper.find('#search').prop('disabled')).toBe(true);
    });
  });

  describe('when the input search is not empty', () => {
    it('should have the search button enabled', () => {
      const wrapper = shallow(<SearchOrganizationInput/>);
      wrapper.setState({organizationName: 'test'});
      expect(wrapper.find('#search').prop('disabled')).toBe(false);
    });
  });

  describe('when the the search button is clicked', () => {
    it('should trigger `doSearch` method', () => {
      const fakeEvent = {
        preventDefault: () => {}
      };
      const wrapper = mount(<SearchOrganizationInput/>);
      wrapper.instance().doSearch = jest.fn();
      wrapper.instance().forceUpdate();
      const spy = jest.spyOn(wrapper.instance(), 'doSearch');
      wrapper.update();
      wrapper.find('form').simulate('submit', fakeEvent);
      expect(spy).toBeCalled();
    });
  });

  describe('doSearch method', () => {
    describe('when has no `organizationName` set', () => {
      it('should not change `isSearching`', () => {
        const fakeEvent = {
          preventDefault: () => {}
        };
        const wrapper = shallow(<SearchOrganizationInput/>);
        wrapper.instance().doSearch(fakeEvent);
        wrapper.update();
        expect(wrapper.state('isSearching')).toBe(false);
      });
    })

    describe('when has `organizationName` set', () => {
      it('should set the `isSearching` to true', () => {
        const fakeEvent = {
          preventDefault: () => {}
        };
        const wrapper = shallow(<SearchOrganizationInput/>);
        wrapper.setState({organizationName: 'teste'})
        wrapper.instance().doSearch(fakeEvent);
        wrapper.update();
        expect(wrapper.state('isSearching')).toBe(true);
      });

      // @TODO: code the test correctly
      it('should set the `isSearching` to false after the call', () => {
        expect(true).toBe(true);
      });

      // @TODO: code the test correctly
      it('should trigger the `updateUsers` method', () => {
        expect(true).toBe(true);
      });

    })
  });
});
