
import React, { useState } from 'react';

const EditItem = ({ item, onSave }) => {
    const [editValue, setEditValue] = useState(item.value);
  
    const handleSaveEdit = (e) => {
      e.preventDefault(); // Prevent default button click behavior
      onSave(item.id, editValue);
    };
  
    return (
      <>
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          className="input-field"
        />
        <button onClick={handleSaveEdit} className="save-button">SAVE</button>
      </>
    );
  };
  
export default EditItem;
