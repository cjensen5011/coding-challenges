import { useState } from 'react';

const useHumanForm = (initialValues, callback) => {
  const [inputs, setInputs] = useState(initialValues);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    callback();
  };

  const handleChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };
  return {
    handleSubmit,
    handleChange,
    inputs
  };
};

export default useHumanForm;
