import React, { useState } from "react";

const allItems = [
  { id: 1, name: "Apple", category: "fruit" },
  { id: 2, name: "Banana", category: "fruit" },
  { id: 3, name: "Cucumbers", category: "vegatable" },
  { id: 4, name: "Orange", category: "fruit" },
  { id: 5, name: "Pepper", category: "vegatable" },
  { id: 6, name: "Tomato", category: "vegatable" },
];

export function ItemList() {
  //State to track the user's selected category of items
  const [value, setValue] = useState("all");

  let filteredItems = [];

  //If the selected category is fruit or vegatable filter the allItems array
  if (value !== "all") {
    filteredItems = allItems.filter((item) => item.category === value);
  }

  //update value state based on the user's selection via the dropdown
  const optionSelected = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <h3> Our Items: </h3>

      <ul id="list">
        {
          //Based on the user's selection map the relevant array to return a list of items
          value != "all"
            ? filteredItems.map((item) => (
                <Item key={item.id} name={item.name} />
              ))
            : allItems.map((item) => <Item key={item.id} name={item.name} />)
        }
      </ul>

      <select id="dropdown" onChange={optionSelected}>
        <option value="all"> Show All </option>
        <option value="fruit"> Show Fruits Only </option>
        <option value="vegatable"> Show Vegatables Only </option>
      </select>
    </>
  );
}

//Component to create a single item
export function Item(props) {
  return <li> {props.name} </li>;
}
