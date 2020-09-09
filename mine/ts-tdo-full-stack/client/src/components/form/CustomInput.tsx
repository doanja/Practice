import React from 'react';
import { Form } from 'react-bootstrap';

interface CustomInputProps {
  id: string;
  type: string;
  placeholder: string;
  name?: string;
  error: string | undefined;
  value: string;
  onChange: (newValue: any) => void;
}

export const CustomInput: React.FC<CustomInputProps> = ({ id, type, placeholder, name, error, value, onChange }) => {
  return (
    <Form.Group>
      <Form.Label>{placeholder}</Form.Label>
      <Form.Control
        className={`${error && 'is-invalid'}`}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        autoFocus={id === 'email' ? true : false}
        autoComplete={name}
        onChange={e => onChange(e)}
      />
      <Form.Text className='text-danger'>{error}</Form.Text>
    </Form.Group>
  );
};
