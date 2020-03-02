import React from 'react';

export default function SearchForm(props) {
  return (
    <form>
      <div className='form-group'>
        <label htmlFor='search'>Search:</label>
        <input
          onChange={props.handleChange}
          value={props.search}
          name='search'
          type='text'
          className='form-control'
          placeholder='Search for a Gif'
          id='search'
        />
        <button onClick={props.handleSubmit} className='btn btn-primary mt-3'>
          Search
        </button>
      </div>
    </form>
  );
}
