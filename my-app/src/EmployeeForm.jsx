import React, { useState } from 'react';
import './App.css'
import Counter from './Counter';
function EmployeeForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const submitForm = (e) => {
    e.preventDefault();

    // Do something with form data
    console.log('Username:', username);
    console.log('Email:', email);

    // Optionally reset form
    setUsername('');
    setEmail('');
  };

  return (
    <>
    <Counter/>
      <form onSubmit={submitForm} className='form'>
        <input
          type="text"
          name="name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your name"
        />
        <br></br>
        <br></br>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
           <br></br>
           <br></br>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default EmployeeForm;

