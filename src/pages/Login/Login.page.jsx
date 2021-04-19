import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { createGlobalStyle } from 'styled-components';
import { useGlobal } from '../../providers/Global.provider';
import { Container, LoginCard, Form, FormInput, Label, InfoContainer, Button } from './Login.styles.js';
import { ProfileSVG } from '../../svg/Profile';
import { PasswordSVG } from '../../svg/Password';
import loginApi from '../../providers/login.api';

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${props => props.theme.body.backgroundColor};
  }
`;

function LoginPage() {
  const history = useHistory();
  const [loginData, setLoginData] = useState({username:'', password:''});
  const [loginProcess, setLoginProcess] = useState({loading:false, error:''});
  const { state, dispatch } = useGlobal();
  const { username, password } = loginData;

  function authenticate(event) {
    event.preventDefault();
    setLoginProcess({...loginProcess, loading:true});
    loginApi(username, password).then((response)=>{
      const data = {...response, authenticated: true}
      dispatch({type:'login', value:data})
      history.push("/");
      setLoginProcess({...loginProcess, loading:false});
    }, (error)=>{
      setLoginProcess({loading: false, error:error.message});
    });
  }

  const handleUsrChange = (e) =>{
    setLoginData({...loginData, username:e.target.value});
  };

  const handlePassChange = (e) =>{
    setLoginData({...loginData, password:e.target.value});
  }
  
  return (
    <Container>
      {/* This line works to change the background of the app
      dinamically with the theme, cause the container doesn't
      cover the entire screen responsively */}
      <GlobalStyle theme={state.theme}/>
      <LoginCard theme={state.theme}>
        <h1>Welcome back!</h1>
        <Form onSubmit={authenticate} className="login-form">
          <Label theme={state.theme}>
            <ProfileSVG/>
            <FormInput theme={state.theme} value={username} onChange={handleUsrChange} required type="text" data-testid="username" placeholder="Username"/>
          </Label>
          <Label theme={state.theme}>
            <PasswordSVG/>
            <FormInput theme={state.theme} value={password} onChange={handlePassChange} required type="password" data-testid="password" placeholder="Password"/>
          </Label>
          {
            loginProcess.error &&
            <InfoContainer>
              <p>{loginProcess.error}</p>
            </InfoContainer>
          }
          <Button type="submit" whileTap={{scale:0.9}}>{loginProcess.loading ? '...':'Login'}</Button>
        </Form>
      </LoginCard>
    </Container>
  );
}

export default LoginPage;
