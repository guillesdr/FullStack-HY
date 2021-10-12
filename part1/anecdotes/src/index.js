import React, { useState } from "react";
import ReactDOM from "react-dom";


const Anecdote = ({anecdoteId}) => {
  return (
    <div>
      {anecdotes[anecdoteId]}
    </div>
  )
}




const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState([0,0,0,0,0,0]);
  const [mostVoted, setMostVoted] = useState(0);

  const anecdotaAleatoria = () => {
    setSelected(Math.trunc(Math.random() * 5));
    console.log(selected)
  };

  const sumarVoto = (number) => {
    const copy = [...points]
    copy[number] += 1
    setPoints(copy)
    anecdoteMostVoted()
  };

  const anecdoteMostVoted = () => {
    const copy = [...points]
    let sorted = [...copy].sort((a,b) => b - a)
    setMostVoted(points.indexOf(sorted[0]))
};


  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Anecdote anecdoteId={selected}/>
      <p>
      <button onClick={() =>sumarVoto(selected)}>vote</button>
        <button onClick={anecdotaAleatoria}>next anecdote</button>
      </p>
      <h2>Anecdote with most votes</h2>
      <Anecdote anecdoteId={mostVoted}/>


    </div> 
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App/>, document.getElementById("root"));
