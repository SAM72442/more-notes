import { Link, useParams, useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useState } from "react";
import { useCreateDate } from "../components/useCreateDate";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id == id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    if (title && details) {
      const newNote = { ...note, title, details, date };

      const newNotes = notes.map((item) => {
        if (item.id == id) {
          item = newNote;
        }
        return item;
      });
      setNotes(newNotes);
    }
    navigate("/");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      const newNotes = notes.filter((item) => item.id != id);
      setNotes(newNotes);
      navigate("/");
    }
  };

  return (
    <>
      <header className="create-heading">
        <Link to={"/"}>
          <button className="btn">
            <IoChevronBackOutline style={{ scale: 2 }} />
          </button>
        </Link>
        <button className="save-btn" onClick={handleForm}>
          Save
        </button>
        <button className="btn" onClick={handleDelete}>
          <RiDeleteBin6Fill style={{ scale: 1.5 }} />
        </button>
      </header>
      <form className="create-note-form" onSubmit={handleForm}>
        <input
          type="text"
          autoFocus
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows="28"
          placeholder="Type Details Here..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </>
  );
};

export default EditNote;
