import React, {useState} from 'react';
import { useHistory } from 'react-router';
import loginApi from './api';
import { useAuth } from '../../providers/Auth';
import NavBar from '../../components/NavBar/Navbar';
import { useStore } from '../../store/StoreProvider';
import './Login.styles.css';

function LoginPage() {
  const {theme} = useStore();
  const [userValue, setUserValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const { login } = useAuth();
  const history = useHistory();

  function authenticate(event) {
    event.preventDefault();
    loginApi(userValue, passValue)
    .then(() => {
      login();
      history.push('/secret');
    })
    .catch(error => console.log(error));
    // 
    // 
  }

  function onChangeHandler(e){
    if(e.target.id === "username"){
      setUserValue(e.target.value)
    }else{
      setPassValue(e.target.value)
    }
  }
  return (
    <section>
      <NavBar/>
      <div className={`login ${theme === "light"?null:"loginDark"}`}>
      <h1>Welcome back!</h1>
      <form onSubmit={authenticate} className="login-form">
        <div className="form-group">
          <label htmlFor="username">
            <strong>username </strong>
            <input required type="text" id="username" value={userValue} onChange={onChangeHandler}/>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <strong>password </strong>
            <input required type="password" id="password"  value={passValue}  onChange={onChangeHandler}/>
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
      </div>
    </section>
  );
}

export default LoginPage;
