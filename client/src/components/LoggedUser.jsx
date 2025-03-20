import React from 'react'
import { FaUserCircle } from "react-icons/fa";

const LoggedUser = ({username}) => {
  return (
    <div>
      <div>


<FaUserCircle size={48} color="gray" />

        {username}
      </div>
    </div>
  )
}

export default LoggedUser
