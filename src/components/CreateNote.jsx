import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  const expandIt = () => {
    setExpand(true);
  };
  const BackNormal = () => {
    setExpand(false);
  };
  return (
    <>
      <div className="main_note" onDoubleClick={BackNormal}>
        <form>
          {expand ? (
            <input
              type="text"
              name="title"
              value={note.title}
              placeholder="Title"
              autoComplete="off"
              onChange={inputEvent}
            />
          ) : null}
          <textarea
            name="content"
            value={note.content}
            onChange={inputEvent}
            placeholder="Write a note"
            onClick={expandIt}
          ></textarea>
          {expand ? (
            <Button
              disabled={!note.title || !note.content}
              onClick={addEvent}
              className="createBtn"
              sx={{
                backgroundColor: "#242424",
                color: "#a8a1a1",
                borderRadius: "50%",
              }}
            >
              <AddIcon />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
