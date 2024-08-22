import { useDispatch } from "react-redux";
import { create } from "../features/anecdote/anecdoteSlice";
import { setNotificationWithTimout } from "../features/notification/notificationSlice";
import anecdoteServices from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value.trim();
    if (content !== "") {
      const newAnecdote = await anecdoteServices.createNew(content)
      dispatch(create(newAnecdote));
      dispatch(setNotificationWithTimout(`New anecdote added: ${content}`)); // Dispatching the notification
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
