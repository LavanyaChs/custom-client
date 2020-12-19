import React, { useState } from 'react';
import { Link, Redirect,useRouteMatch } from 'react-router-dom';
import { useAuthDataContext } from '../AuthData/AuthDataContext';
const Home = (props) => {
    //console.log(props)
    const { userName, userLocation } = useAuthDataContext();
    const [count, setCount] = useState(0);
    let match = useRouteMatch();
    console.log(match)
    const gotoDetails = () => {
        props.history.push('/details')
        //setCount(1) 
    }
    
    return (count==1? <Redirect to='/details'/>: <div>
        <button onClick={gotoDetails}>Go to details</button>
        I am in Home page : {userName} - {userLocation}</div>)
}
export default Home;