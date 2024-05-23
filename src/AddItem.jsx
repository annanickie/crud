
import React, { useState } from 'react';

const AddItem = ({ onAdd }) => {
    const [newItem, setNewItem] = useState('');
  
    const handleAddItem = (e) => {
      e.preventDefault(); 
      if (newItem.trim() !== '') {
        onAdd(newItem);
        setNewItem('');
      }
    };
  
    return (
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Write Something"
          className="input-field"
        />
        <button type="submit" className="add-button">ADD</button> {/* Add type="submit" to the button */}
      </form>
    );
  };

export default AddItem;
