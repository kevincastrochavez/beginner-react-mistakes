import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id='email'
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id='password'
      />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default App;
