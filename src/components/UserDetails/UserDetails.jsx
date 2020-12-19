import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthDataContext } from '../AuthData/AuthDataContext';
const UserDetails = () => {
    const { userName, onLogout } = useAuthDataContext();
    if (!userName) {
        return <Link to='/'>Please login</Link>
    } else {
        return (<div>
            <h3>Hello {userName}</h3>
            <button onClick={onLogout}>Log out</button>
        </div>
        )
    }
}
export default UserDetails;