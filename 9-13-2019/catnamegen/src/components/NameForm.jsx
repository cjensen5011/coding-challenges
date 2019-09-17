import React, { Component } from 'react';
import CatName from './CatName';

class NameForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      birthMonth: '',
      gender: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { firstName, lastName, birthMonth, gender } = this.state;
    console.log({ firstName, lastName, birthMonth, gender });
    this.setState({
      firstName: '',
      lastName: '',
      birthMonth: '',
      gender: ''
    });
  };

  render() {
    const { firstName, lastName, birthMonth, gender } = this.state;

    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <form onSubmit={this.handleSubmit}>
              <div className='form-group'>
                <label>First Name:</label>
                <input
                  type='text'
                  name='firstName'
                  className='form-control'
                  value={firstName}
                  onChange={this.handleChange}
                />
                <label>Last Name:</label>
                <input
                  type='text'
                  name='lastName'
                  className='form-control'
                  value={lastName}
                  onChange={this.handleChange}
                />
                <label>Birth Month:</label>
                <input
                  type='text'
                  name='birthMonth'
                  className='form-control'
                  value={birthMonth}
                  onChange={this.handleChange}
                />
                <label>Prefered Gender:</label>
                <input
                  type='text'
                  name='gender'
                  className='form-control'
                  value={gender}
                  onChange={this.handleChange}
                />
              </div>
              <button className='btn btn-primary' type='submit'>
                Submit
              </button>
            </form>
          </div>
          <CatName />
          {/* <div className='col-md-6'>
            <div className='container'>
              <p>Your first name is: {firstName}</p>
              <p>Your last name is: {lastName}</p>
              <p>Your birth month is: {birthMonth}</p>
              <p>Your prefered gender is: {gender}</p>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default NameForm;
