import React, { useState } from "react";
import LongCount from "./LongCount";
import './Long.css'

function LongCard({ name, targetDate, id, handleDelete, handleUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newTargetDate, setNewTargetDate] = useState(targetDate);

  const submitEdit = () => {
    handleUpdate(id, { name: newName, targetDate: newTargetDate });
    setIsEditing(false); // Exit edit mode
  };

  return (
    <main className="main-container-cards">
      {isEditing ? (
        <div>
          <input 
            className="edit-input"
            type="text" 
            value={newName} 
            onChange={(e) => setNewName(e.target.value)} 
          />
          <input 
            className="edit-input"
            type="datetime-local" 
            value={newTargetDate} 
            onChange={(e) => setNewTargetDate(e.target.value)} 
          />
          <button className="savebtn" onClick={submitEdit}>Save</button>
          <button className="cancelbtn" onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3 className="long-title">{name}</h3>
          <LongCount targetDate={targetDate} />
          <button className="editedbtn" onClick={() => setIsEditing(true)}>Edit</button>
          <button className="longbtn-delete" onClick={() => handleDelete(id)}>x</button>
        </div>
      )}
    </main>
  );
}

export default LongCard;
