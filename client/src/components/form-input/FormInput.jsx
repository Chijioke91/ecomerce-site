import React from 'react';
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from './FormInputStyle';

const FormInput = ({ handleChange, label, ...formProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...formProps} />
      {label ? (
        <FormInputLabel className={formProps.value.length ? 'shrink' : ''}>
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
