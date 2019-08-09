import {useState} from "react";

function useToggle(initialVal = false) {
  //pass in the initial value to be false if no param is defined

  const [state, setState] = useState(initialVal);

  //create a toggle function to set the state true/false on toggle
  const toggle = () => {
    setState(!state);
  }

  //!important: here we return an array
    //1. state
    //2. the function to manipulate the state
  return [state, toggle];
}

export default useToggle;