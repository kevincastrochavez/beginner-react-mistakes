import React from 'react';

function EventHandlers() {
  const array = [1, 2, 3];

  function handleSubmit(e) {
    e.preventDefault();

    console.log('Submit', new FormData(e.target).get('text'));
  }

  function print(number) {
    console.log('Print', number);
  }

  function doubler(number) {
    return () => {
      console.log('Double', number * 2);
    };
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' name='text' defaultValue='Initial' />
        <button type='submit'>Submit</button>
      </form>
      {array?.map((number) => {
        return (
          <button key={number} onClick={() => print(number)}>
            Print {number}
          </button>
        );
      })}
      {array?.map((number) => {
        return (
          <button key={number} onClick={doubler(number)}>
            Double {number}
          </button>
        );
      })}
    </>
  );
}

export default EventHandlers;
