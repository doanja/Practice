import React from 'react';
import useInput from '../hooks/useInput';

function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput('');
  const [lastName, bindLastName, resetLastName] = useInput('');

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First NAme</label>
          <input type='text' {...bindFirstName} />
        </div>
        <div>
          <label>Last NAme</label>
          <input type='text' value={lastName} {...bindLastName} />
        </div>
        <button>submit</button>
      </form>
    </div>
  );
}

export default UserForm;
