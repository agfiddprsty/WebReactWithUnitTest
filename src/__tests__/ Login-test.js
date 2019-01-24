import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Login from '../login.js';
import Enzyme, { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

// describe what we are testing
describe('Email input', () => {
  
  it('should respond to change event and change the state of the Login Component', () => {
   
   const wrapper = shallow(<Login />);
   wrapper.find('#email').simulate('change', {target: {name: 'email', value: 'fiid17@gmail.com'}});
   
  expect(wrapper.state('email')).toEqual('fiid17@gmail.com');
  })
 })
 
 describe('Password input', () => {
  
  it('should respond to change event and change the state of the Login Component', () => {
   
   const wrapper = shallow(<Login />);
   wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'fiid'}});
   
   expect(wrapper.state('password')).toEqual('fiid');
  })
 })