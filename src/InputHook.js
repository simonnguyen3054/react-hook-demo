import React from "react";
import useFormState from "./hooks/useFormState";

export default function InputHook() {
  const [email, setEmail, resetEmail] = useFormState("");

  return (
    <div>
      <h1>The value is this custom hook is ...{email}</h1>
      <input type="text" value={email} onChange={setEmail}/>
      <button onClick={resetEmail}>Submit</button>
    </div>
  )
}