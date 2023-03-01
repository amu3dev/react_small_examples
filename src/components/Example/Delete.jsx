import React, { useState } from "react";
import "./Delete.css"; // Import CSS file

export default function Delete() {
  const [alertDel, setAlertDel] = useState(false);
  const handleProceed = () => {
    setAlertDel(false);
  };
  const handleDelete = () => {
    setAlertDel(true);
  };

  return (
    <div>
      {!alertDel ? (
        <></>
      ) : (
        <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={handleProceed}>Proceed</button>
        </div>
      )}

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
