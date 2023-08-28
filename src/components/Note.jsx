import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <div className="box">
        <div className="note">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <Button className="noteBtn" onClick={deleteNote}>
            <DeleteIcon className="deleteBtn" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Note;
