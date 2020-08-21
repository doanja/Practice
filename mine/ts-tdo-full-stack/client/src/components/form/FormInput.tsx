import React from 'react';
import { Form } from 'react-bootstrap';

interface FormInputProps {
  label: string;
  error: string | undefined;
  type: string;
  placeholder: string;
  onChange: (newValue: string) => void;
  value: string;
  id: string;
}

export const FormInput: React.FC<FormInputProps> = ({ label, error, type, placeholder, onChange, value, id }) => {
  return (
    <Form.Group>
      {/* <label htmlFor={id}>{label}</label> */}
      <Form.Control className={`${error && 'is-invalid'}`} type={type} placeholder={placeholder} onChange={e => onChange(e)} value={value} id={id} />
      <Form.Text className='text-danger'>{error}</Form.Text>
    </Form.Group>
  );
};
