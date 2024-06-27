import React, { useState } from "react";
import { ItemList } from "./item-list";

//This component prompts the user for their name and then calls the next component
export default function WelcomeMsg() {
  const [userName, setUserName] = useState("");

  const [showContent, setShowContent] = useState(true);

  //Function to set the userName state to the input element value
  const submitBtnClicked = (event) => {
    event.preventDefault();
    const nameInput = event.target.elements.nameInput.value;
    setUserName(nameInput);

    //Update the showContent state to false in order to hide this component and show the next one
    setTimeout(() => {
      setShowContent(false);
    }, 300);
  };

  return (
    <div>
      {
        //If the showContent state is true display the following section
        showContent ? (
          <>
            <h2> Welcome to our page! </h2>

            <h2> Please enter your UserName below: </h2>

            <form onSubmit={submitBtnClicked}>
              <input type="text" id="nameInput" />
              <button
                type="submit"
                style={{ display: "block", margin: "auto" }}
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          //If showContent is false greet the user by his name and display the ItemList component
          <>
            {
              //If userName is true (not an empty string as initially set ) greet the user
              userName && <h2> Hello {userName}! </h2>
            }

            <ItemList></ItemList>
          </>
        )
      }
    </div>
  );
}
