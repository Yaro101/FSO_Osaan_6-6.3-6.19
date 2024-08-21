/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import { vote } from "../features/anecdote/anecdoteSlice";

// Yhden Anecdote komponentti
const Anecdote = ({ anecdote, onVote }) => {
  return (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => onVote(anecdote.id)}>vote</button>
      </div>
    </div>
  );
};

// AnecdoteList-komponentti
const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdote);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleVote = (id) => {
    dispatch(vote(id));
  };

  const filteredAnecdotes = anecdotes.filter((anecdote) =>
    anecdote.content.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedAnecdotes = filteredAnecdotes.sort((a, b) => b.votes - a.votes);

  return (
    <div>
      {sortedAnecdotes.map((anecdote) => (
        <Anecdote key={anecdote.id} anecdote={anecdote} onVote={handleVote} />
      ))}
    </div>
  );
};

export default AnecdoteList;
