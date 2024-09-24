import { useState } from "react";

interface ChangePasswordProps {
  close: () => void
}

const EditProfile = ({close}: ChangePasswordProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleClickClear = () => {
    setFirstName('');
    setLastName('');
  }

  const handleClickSave = () => {
    // TODO Save updated profile and close form
    alert('Save profile');
    close();
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
      <button onClick={close}>Close without Save</button>
      <button onClick={handleClickClear}>Clear</button>
    </div>
  )
}

export default EditProfile