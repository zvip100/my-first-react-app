import React, { useState } from "react";

export default function WelcomeMsg() {
  
  const [userName, setUserName] = useState("");

  const [showContent, setShowContent] = useState(true);

  const submitBtnClicked = () => {
    const nameInput = document.getElementById("name-input").value;
    setUserName(nameInput);

    setTimeout(() => {
      setShowContent(false);
    }, 2000);
  };

  return (
    <>
      {showContent ? (
        <>
          <h2> Welcome to our page! </h2>

          <h2> Please enter your UserName below: </h2>

          <input type="text" id="name-input" />

          <button type="button" onClick={submitBtnClicked}>
            Submit
          </button>

          {userName && <h3> Hello {userName}! </h3>}
        </>
      ) : ( 
        <> {userName && <h3> Hello {userName}! </h3>} </>
      )}
    </>
  );
}
