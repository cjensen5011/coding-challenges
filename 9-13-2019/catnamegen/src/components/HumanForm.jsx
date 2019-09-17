import React from 'react';
import useHumanForm from '../CustomHooks';

const HumanForm = () => {
  const signup = () => {
    let humanInfo = [
      inputs.firstName,
      inputs.lastName,
      inputs.birthMonth,
      inputs.gender
    ];
    console.log(humanInfo);
  };

  const { inputs, handleChange, handleSubmit } = useHumanForm(
    {
      firstName: '',
      lastName: '',
      birthMonth: '',
      gender: ''
    },
    signup
  );

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label>First Name:</label>
              <input
                type='text'
                name='firstName'
                className='form-control'
                onChange={handleChange}
                value={inputs.firstName}
              />
              <label>Last Name:</label>
              <input
                type='text'
                name='lastName'
                className='form-control'
                onChange={handleChange}
                value={inputs.lastName}
              />
              <label>Birth Month:</label>
              <input
                type='text'
                name='birthMonth'
                className='form-control'
                onChange={handleChange}
                value={inputs.birthMonth}
              />
              <label>Prefered Gender:</label>
              <input
                type='text'
                name='gender'
                className='form-control'
                onChange={handleChange}
                value={inputs.gender}
              />
            </div>
            <button className='btn btn-primary' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HumanForm;
