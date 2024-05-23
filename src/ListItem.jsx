
import React from 'react';

const ListItem = ({ item, onEdit, onDelete }) => {
    const handleEditClick = (e) => {
      e.preventDefault(); // Prevent default button click behavior
      onEdit(item);
    };
  
    const handleDeleteClick = (e) => {
      e.preventDefault(); // Prevent default button click behavior
      onDelete(item.id);
    };
  
    return (
      <tr>
        <td>{item.value}</td>
        <td>
          <button onClick={handleEditClick} className="edit-button">EDIT</button>
          <button onClick={handleDeleteClick} className="delete-button">DELETE</button>
        </td>
      </tr>
    );
  };

export default ListItem;
