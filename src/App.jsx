import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import AddItem from './AddItem';
import EditItem from './EditItem';
import ListItem from './ListItem';
import './App.css';

const CRUDApp = () => {
  const [data, setData] = useState([]);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await firebase.database().ref('items').once('value');
      const items = snapshot.val();
      if (items) {
        setData(Object.entries(items).map(([key, value]) => ({ id: key, value })));
      }
    };
    fetchData();
  }, []);

  const handleAddItem = (newItem) => {
    firebase.database().ref('items').push(newItem);
  };

  const handleEdit = (item) => {
    setEditItem(item);
  };

  const handleSaveEdit = (itemId, editValue) => {
    firebase.database().ref(`items/${itemId}`).set(editValue);
    setEditItem(null);
  };

  const handleDeleteItem = (itemId) => {
    firebase.database().ref(`items/${itemId}`).remove();
  };

  return (
    <div className="container">
      <h1 className="title">CRUD App with Firebase And React JS</h1>
      <AddItem onAdd={handleAddItem} />
      <h2> Your Data</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              onEdit={handleEdit}
              onDelete={handleDeleteItem}
            />
          ))}
        </tbody>
      </table>
      {editItem && <EditItem item={editItem} onSave={handleSaveEdit} />}
    </div>
  );
};

export default CRUDApp;
