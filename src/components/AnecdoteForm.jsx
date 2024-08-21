import { useDispatch } from "react-redux";
import { create } from "../features/anecdote/anecdoteSlice";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value.trim();
    if (content !== "") {
      dispatch(create(content));
      event.target.anecdote.value = "";
    }
  };

  return (
    <form onSubmit={addAnecdote}>
      <div>
        <input name="anecdote" />
      </div>
      <button type="submit">create</button>
    </form>
  );
};

export default AnecdoteForm;
