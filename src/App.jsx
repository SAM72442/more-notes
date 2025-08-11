import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateNotes from "./pages/CreateNotes";
import EditNote from "./pages/EditNote";
import NotesHome from "./pages/NotesHome";

import { useEffect, useState } from "react";

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotesHome notes={notes} />} />
        <Route
          path="/create-note"
          element={<CreateNotes setNotes={setNotes} />}
        />
        <Route
          path="/edit-note/:id"
          element={<EditNote notes={notes} setNotes={setNotes} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
