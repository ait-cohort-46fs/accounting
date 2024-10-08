import { useState } from "react"
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";
import { UpdateMode } from "../../utils/type.d";

const UpdateUser = () => {
    const [updateMode, setUpdateMode] = useState(UpdateMode.DEFAULT);

    const close = () => {
        setUpdateMode(UpdateMode.DEFAULT)
    }

    switch (updateMode) {
        case UpdateMode.EDIT_PROFILE:
            return <EditProfile close={close} />;
        case UpdateMode.CHANGE_PASSWORD:
            return <ChangePassword close={close}  />
        default:
            return (
                <div>
                    <button onClick={() => setUpdateMode(UpdateMode.CHANGE_PASSWORD)}>Change password</button>
                    <button onClick={() => setUpdateMode(UpdateMode.EDIT_PROFILE)}>Edit profile</button>
                </div>
            )
    }
}

export default UpdateUser