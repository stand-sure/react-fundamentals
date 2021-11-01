// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from "react";

function UsernameForm({onSubmitUsername}) {
  // const [error, setError] = React.useState(null);
  const [userName, setUserName] = React.useState("");

  const handleSubmit = event => {
    event.preventDefault();
    // const username = inputRef.current.value;
    onSubmitUsername(userName);
  };

  const handleChange = event => {
    let {value: text} = event.target;
    text = String(text);
    setUserName(text.toLowerCase());

    // setError(isLowerCase ? null : "Username must be lowercase");
  };

  //const inputRef = React.useRef();

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userNameInput">Username:</label>
        <input
          type="text"
          id="userNameInput"
          /* ref={inputRef} */
          onChange={handleChange}
          value={userName}
        />
      </div>
      {/*<div style={{color: "red"}}>{error}</div> */}
      <button type="submit" disabled={false}>
        Submit
      </button>
    </form>
  );
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
