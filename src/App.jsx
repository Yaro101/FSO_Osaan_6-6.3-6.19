import { useEffect } from "react";
import anecdoteServices from "./services/anecdotes";
import { setAnecdote } from "./features/anecdote/anecdoteSlice";
import { useDispatch } from "react-redux";
import AnecdoteList from "./components/AnecdoteList";
import AnecdoteForm from "./components/AnecdoteForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    anecdoteServices
      .getAll()
      .then((anecdotes) => dispatch(setAnecdote(anecdotes)));
  }, [])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <h2>Create new</h2>
      <AnecdoteForm />
    </div>
  );
};

export default App;