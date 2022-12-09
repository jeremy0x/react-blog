import { useState } from "react";

const useStatePractice = () => {
  const [state, setState] = useState('useState practice');


  return (
    <div className='flex-row use-state'>
      <code>{state}</code>
      <button
        className='button-89'
        type='button'
        onClick={() => {
          setState((prevTitle) => prevTitle + '!');
          if (state.length > 25) {
            setState('useState practice');
          }
        }}
      >
        add exclamation mark
      </button>
    </div>
  );
};

export default useStatePractice;
