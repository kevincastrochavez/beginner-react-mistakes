import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';
import Counter from './Counter';

function App() {
  // DO NOT USE STATE IF YOU DON'T NEED TO
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log({ email, password });
    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    // <form onSubmit={onSubmit}>
    //   <label htmlFor='email'>Email</label>
    //   <input type='email' id='email' ref={emailRef} />
    //   <label htmlFor='password'>Password</label>
    //   <input type='password' ref={passwordRef} id='password' />
    //   <button type='submit'>Submit</button>
    // </form>
    <Counter />
  );
}

export default App;
