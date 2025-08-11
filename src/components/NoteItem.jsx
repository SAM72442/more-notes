import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const NoteItem = ({ note }) => {
  const handleFavourite = () => {
    //note.favourite = !note.favourite;
    window.alert("Favourites Func.: UNDER CONSTRUCTION");
  };

  return (
    <div className="note-item">
      <div className="favourite-btn" onClick={handleFavourite}>
        {note.favourite ? (
          <FaStar color="yellow" style={{ scale: 1.5 }} />
        ) : (
          <FaRegStar style={{ scale: 1.5 }} />
        )}
      </div>
      <Link to={`/edit-note/${note.id}`} className="note-item-link">
        <h4>
          {note.title.length > 50
            ? note.title.substr(0, 50) + "..."
            : note.title}
        </h4>
        <p>{note.date}</p>
      </Link>
    </div>
  );
};

export default NoteItem;
