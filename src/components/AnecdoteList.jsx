/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import { voteAnecdote } from "../features/anecdote/anecdoteSlice";
import { setNotificationWithTimout } from "../features/notification/notificationSlice";

// Yhden Anecdote komponentti
const Anecdote = ({ anecdote, onVote }) => {
  return (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => onVote(anecdote)}>vote</button>
      </div>
    </div>
  );
};

// AnecdoteList-komponentti
const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdote);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleVote = (anecdote) => {
    // Selecting the anecdote
    // const anecdote = anecdotes.find((a) => a.id === id);
    dispatch(voteAnecdote(anecdote));
    // Dispatching the notification for the selected anecdote
    dispatch(setNotificationWithTimout(`You voted for ${anecdote.content}`));
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
