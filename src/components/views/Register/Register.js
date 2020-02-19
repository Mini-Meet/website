// @flow
import React, { Component } from 'react';
import { Footer, Header } from '../../blocks';

import { Input, Dropdown } from '../../elements';

import './Register.scss';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      // TODO: Export to separate file
      role: [
        {
          id: 0,
          title: 'CEO',
          selected: false,
          key: 'role',
        },
        {
          id: 1,
          title: 'Product Manager',
          selected: false,
          key: 'role',
        },
        {
          id: 2,
          title: 'HR',
          selected: false,
          key: 'role',
        },
        {
          id: 3,
          title: 'Developer',
          selected: false,
          key: 'role',
        },
      ],
      remote: [
        {
          id: 0,
          title: 'Fully Remote',
          selected: false,
          key: 'remote',
        },
        {
          id: 1,
          title: 'Part-Remote',
          selected: false,
          key: 'remote',
        },
        {
          id: 2,
          title: 'In-Office',
          selected: false,
          key: 'remote',
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <Header dark />

        <div className="register">
          <h3>Sign Up</h3>
          <p className="register__subheader">
            Some information on why you should sign up
          </p>
          <Input placeholder="Company Email" type="text" />
          <Input placeholder="Full Name" type="text" />
          <Dropdown
            title="Select role"
            dropdownList={this.state.role}
            resetThenSet={this.resetThenSet}
          />
          <Dropdown
            title="Do you work remote?"
            dropdownList={this.state.remote}
            resetThenSet={this.resetThenSet}
          />
        </div>
        <Footer />
      </div>
    );
  }

  toggleSelected = (id, key) => {
    // TODO
    const temp = JSON.parse(JSON.stringify(this.state[key]));
    temp[id].selected = !temp[id].selected;
    this.setState({
      [key]: temp,
    });
  };

  resetThenSet = (id, key) => {
    const temp = JSON.parse(JSON.stringify(this.state[key]));
    // TODO
    temp.forEach(item => (item.selected = false));
    temp[id].selected = true;
    this.setState({
      [key]: temp,
    });
  };
}
