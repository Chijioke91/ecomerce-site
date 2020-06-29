import React from 'react';
import { CustomButtonStyles } from './CustomButtonStyles';

const CustomButton = ({ children, ...props }) => {
  return <CustomButtonStyles {...props}>{children}</CustomButtonStyles>;
};

export default CustomButton;
