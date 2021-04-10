import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import Video from '../../pages/Video';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
// import Fortune from '../Fortune';
import Layout from '../Layout';
import { Header } from '../index';
// import { random } from '../../utils/fns';
import GlobalStyle from '../../GlobalStyle';
import { lightTheme, darkTheme } from '../../utils/themes';
import { useGlobalProvider } from '../../store/global/global.provider';

// change api call with context
import useFetch from '../../utils/hooks/useFetch';

function App() {
  // useLayoutEffect(() => {
  //   const { body } = document;

  //   function rotateBackground() {
  //     const xPercent = random(100);
  //     const yPercent = random(100);
  //     body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
  //   }

  //   const intervalId = setInterval(rotateBackground, 3000);
  //   body.addEventListener('click', rotateBackground);

  //   return () => {
  //     clearInterval(intervalId);
  //     body.removeEventListener('click', rotateBackground);
  //   };
  // }, []);

  // Dark Mode
  const {
    state: { themeValue },
  } = useGlobalProvider();
  console.log(themeValue);
  const themeMode = themeValue === 'light' ? lightTheme : darkTheme;

  const [param, setParam] = useState('Wizeline');
  const { videoList, loading, error } = useFetch(param, true);

  const handleChange = (value) => {
    setParam(value);
  };

  return (
    // <GlobalProvider>
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <Layout>
            <Header handleChange={handleChange} />
            <Switch>
              <Route exact path="/">
                <HomePage fetching={{ videoList, loading, error }} />
              </Route>
              <Route exact path="/video/:id">
                <Video />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Private exact path="/secret">
                <SecretPage />
              </Private>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            {/* <Fortune /> */}
          </Layout>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
    // </GlobalProvider>
  );
}

export default App;
