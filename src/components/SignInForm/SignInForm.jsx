import React ,{useRef,useState} from 'react';
import { useAuthDataContext } from '../AuthData/AuthDataContext';
const SignInForm = () => {
    const { onLogin } = useAuthDataContext();
    const [error, setError] = useState(null);
    const nameInput = useRef();
    const emailInput = useRef();
    const pswInput = useRef();

    const handleSubmit = () => {
        const currentFormValue = {
            name: nameInput.current.value,
            email: emailInput.current.value,
            password: pswInput.current.value,
        };
        alert("Added!!",currentFormValue.name)
        //authApi.authenticate(currentFormValue).then(onLogin).catch(setError); 
    }
    return (
        <div>
            {error ? (<span style="error">{error}</span>) : null}
            <input ref={nameInput} type="text" name="name" />
            <input ref={emailInput} type="text" name="email" />
            <input ref={pswInput} type="password" name="password" />
            <button onClick={handleSubmit}>Sign in</button>
        </div>
    );
}
export default SignInForm;