import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { AuthData } from '../Mocks/AuthData';
export const AuthDataContext = createContext(null);
const initialAuthData = {};
const AuthDataProvider = props => {
    const [authData, setAuthData] = useState(initialAuthData);
    useEffect(() => {
        const currentUserAuthData =  AuthData;
        if (currentUserAuthData.userName) {
            setAuthData(currentUserAuthData);
        }
    }, []);
    const onLogout = () => setAuthData(initialAuthData);
    const onLogin = (newAuthData) => setAuthData(newAuthData);
    const authDataValue = useMemo(()=>({ ...authData, onLogin, onLogout }), [authData]);
    //const useMemo(() => ({ …authData, onLogin, onLogout }), [authData])
    return <AuthDataContext.Provider
        value=
        {authDataValue}
        //{{ ...authData, onLogin, onLogout }}
        {...props} />;
};
export const useAuthDataContext = () => useContext(AuthDataContext);
export default AuthDataProvider;