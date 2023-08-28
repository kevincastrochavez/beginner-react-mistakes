import logo from './logo.svg';
import './App.css';
import { useState, useRef, useEffect } from 'react';
import Counter from './Counter';
import Form from './Form';
import EventHandlers from './EventHandlers';

function App() {
  // DO NOT USE STATE IF YOU DON'T NEED TO
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const emailRef = useRef();
  // const passwordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const [fullName, setFullName] = useState('');

  const onSubmit = (e) => {
    // e.preventDefault();
    // // console.log({ email, password });
    // console.log({
    //   email: emailRef.current.value,
    //   password: passwordRef.current.value,
    // });
    e.preventDefault();
    setFullName(`${firstNameRef.current.value} ${lastNameRef.current.value}`);
  };

  return (
    // <form onSubmit={onSubmit}>
    //   <label htmlFor='email'>Email</label>
    //   <input type='email' id='email' ref={emailRef} />
    //   <label htmlFor='password'>Password</label>
    //   <input type='password' ref={passwordRef} id='password' />
    //   <button type='submit'>Submit</button>
    // </form>
    // <form onSubmit={onSubmit}>
    //   <input type='firstName' id='firstName' ref={firstNameRef} />
    //   <input type='lastName' ref={lastNameRef} id='lastName' />
    //   {fullName}
    //   <button type='submit'>Submit</button>
    // </form>
    // <Counter />
    // <Form />
    <EventHandlers />
  );
}

export default App;
