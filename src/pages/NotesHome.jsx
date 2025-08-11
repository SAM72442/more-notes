import { FaRegStar } from "react-icons/fa";
//TODO: Favourite/Important Notes
import { FaStar } from "react-icons/fa";

import { IoMdAdd } from "react-icons/io";
import NoteItem from "../components/NoteItem";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NotesHome = ({ notes }) => {
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);
  const [showFavourites, setShowFavourites] = useState(false);

  const handleSearch = () => {
    setFilteredNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
          return note;
        }
      })
    );
  };

  useEffect(handleSearch, [text]);

  return (
    <>
      <header className="app-heading">
        <h2 className="bitcount-textstyle">More Notes</h2>
        <div className="app-toolbar">
          <Link to={"/create-note"}>
            <button className="btn">
              <IoMdAdd style={{ scale: 2 }} />
            </button>
          </Link>
          <input
            type="text"
            placeholder="Search..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              handleSearch();
            }}
          />
          <button
            className="btn"
            onClick={() => setShowFavourites((prevState) => !prevState)}
          >
            {showFavourites ? (
              <FaStar color="yellow" style={{ scale: 1.5 }} />
            ) : (
              <FaRegStar style={{ scale: 1.5 }} />
            )}
          </button>
        </div>
      </header>
      <div className="notes-container">
        {filteredNotes.length == 0 && (
          <p className="empty-message">No Notes Found...</p>
        )}
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
    </>
  );
};

export default NotesHome;
