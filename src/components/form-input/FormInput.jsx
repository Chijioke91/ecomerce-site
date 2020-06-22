import React from 'react';
import './FormInput.scss';

const FormInput = ({ handleChange, label, ...formProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...formProps} />
      {label ? (
        <label
          className={`${
            formProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
