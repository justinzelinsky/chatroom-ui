import { node } from 'prop-types';
import React from 'react';
import Form from 'react-bootstrap/Form';

function FormGroup ({ children, ...formGroupProps }) {
  return (
    <Form.Group {...formGroupProps}>
      {children}
    </Form.Group>
  );
}

FormGroup.propTypes = {
  children: node.isRequired
};

export default FormGroup;