import React, { useEffect, useMemo, useState } from 'react';

function Form() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const person = useMemo(() => {
    return { age, name };
  }, [age, name]);

  useEffect(() => {
    console.log(person);
  }, [person]);

  return (
    <div style={{ background: darkMode ? '#333' : '#FFF' }}>
      AGE:
      <input
        type='number'
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      Name:{' '}
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      Dark Mode:{' '}
      <input
        type='checkbox'
        value={darkMode}
        onChange={(e) => setDarkMode(e.target.checked)}
      />
    </div>
  );
}

export default Form;
