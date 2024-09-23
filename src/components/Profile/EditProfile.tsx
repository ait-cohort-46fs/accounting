import { useState } from "react";

const EditProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleClickClear = () => {
    setFirstName('');
    setLastName('');
  }

  const handleClickSave = () => {
    // TODO Save updated profile and close form
    alert('Save profile');
  }

  const handleClickClose = () => {
    // TODO Close  edit profile without save
    alert('Close  edit profile without save');
  }

  return (
    <div>
      <label>First name:
        <input
          onChange={e => setFirstName(e.target.value)}
          value={firstName}
          type="text"
        />
      </label>
      <label>Last name:
        <input
          onChange={e => setLastName(e.target.value)}
          value={lastName}
          type="text"
        />
      </label>
      <button onClick={handleClickSave}>Save and Close</button>
      <button onClick={handleClickClose}>Close without Save</button>
      <button onClick={handleClickClear}>Clear</button>
    </div>
  )
}

export default EditProfile