import React from "react";
import { Person } from "./Person";

export const Persons = ({persons, nameFilter}) => {

    const personsToShow = nameFilter.length === 0 
    ? persons
    : persons.filter(e => e.name.toUpperCase().includes( nameFilter.toUpperCase()))


  return (
    <>
      {personsToShow.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </>
  );
};
