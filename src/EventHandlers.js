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
      {/* onSubmit expects a function as a parameter */}
      <form onSubmit={handleSubmit}>
        <input type='text' name='text' defaultValue='Initial' />
        <button type='submit'>Submit</button>
      </form>
      {array?.map((number) => {
        return (
          // This function does not return anything. I cannot say just (print(number))
          // When passing custom data, this is useful
          <button key={number} onClick={() => print(number)}>
            Print {number}
          </button>
        );
      })}
      {array?.map((number) => {
        return (
          // Here you are passing the return value of a function, since it's returning something
          // When code runs, it assigns the return value to the onClick listener
          // Rarely used
          <button key={number} onClick={doubler(number)}>
            Double {number}
          </button>
        );
      })}
    </>
  );
}

export default EventHandlers;
