import { Link, useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useCreateDate } from "../components/useCreateDate";

const CreateNotes = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const date = useCreateDate();
  const navigate = useNavigate();
  const favourite = false;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && details) {
      const note = { id: uuid(), title, details, date, favourite };

      // add notes
      setNotes((prevNotes) => [note, ...prevNotes]);

      // redirect to home page
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
        <button className="save-btn" onClick={handleSubmit}>
          Save
        </button>
      </header>
      <form className="create-note-form" onSubmit={handleSubmit}>
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

export default CreateNotes;
