import { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, SetShowEdit] = useState(false);

  const handleEditClick = () => {
    SetShowEdit(!showEdit);
  };

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleSubmit = (id, newTitle) => {
    SetShowEdit(false);
    onEdit(id, newTitle);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}></button>
      </div>
    </div>
  );
};

export default BookShow;
