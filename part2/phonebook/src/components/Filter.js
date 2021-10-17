import React from "react";

export const Filter = ({nameFilter, setNameFilter}) => {

    const handleNameFilter = (event) => {
        //event.preventDefault()
        setNameFilter(event.target.value);
      };

  return (
    <div>
      Filter shown with:{" "}
      <input value={nameFilter} onChange={handleNameFilter} />
    </div>
  );
};
