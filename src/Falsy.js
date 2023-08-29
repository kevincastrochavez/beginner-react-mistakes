import React from 'react';

function Falsy() {
  const array = [];

  return (
    <div>
      {/* This returns 0 */}
      {/* {array.length && ( */}
      {/* Evaluating this fixes the result to false */}
      {array.length !== 0 && (
        <div>
          <span>Array Items:</span>
          {array.join(', ')}
        </div>
      )}
    </div>
  );
}

export default Falsy;
