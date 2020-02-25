// @flow
import React, { Component } from 'react';

import { Input, Dropdown } from '../../elements';

import './Register.scss';

export default class Register extends Component<void> {
  render() {
    const roleDropdownItems = [
      {
        id: 0,
        label: 'CEO',
      },
      {
        id: 1,
        label: 'Product Manager',
      },
      {
        id: 2,
        label: 'HR',
      },
      {
        id: 3,
        label: 'Developer',
      },
    ];

    const remoteSelectionDropdownItems = [
      {
        id: 0,
        label: 'Fully Remote',
      },
      {
        id: 1,
        label: 'Part-Remote',
      },
      {
        id: 2,
        label: 'In-Office',
      },
    ];

    return (
      <div className="App">
        <div className="register">
          <h3>Sign Up</h3>
          <p className="register__subheader">
            Some information on why you should sign up
          </p>
          <Input placeholder="Company Email" type="text" />
          <Input placeholder="Full Name" type="text" />
          <Dropdown title="Select role" items={roleDropdownItems} />
          <Dropdown
            title="Do you work remote?"
            items={remoteSelectionDropdownItems}
          />
        </div>
      </div>
    );
  }
}
