import React, { useRef, useContext } from 'react';
import { Content, Title, Text } from './Home.styled';
import Header from '../../components/Header';
import { GlobalContext } from '../../context/GlobalContext';

import './Home.styles.css';
import VideoList from '../../components/VideoList';
import { ytqWizeline } from '../../ytq-wizeline';
import { ytqTechnology } from '../../ytq-technology';
import { ytqEsports } from '../../ytq-esports';
import VideoHome from '../../components/VideoHome/VideoHome.component';

function HomePage() {
  const sectionRef = useRef(null);
  const globalContext = useContext(GlobalContext);

  return (
    <section className="homepage" ref={sectionRef}>
      <Header />
      <Content>
        {globalContext.query === '' ? (
          <>
            <Text theme={globalContext.colors}>
              Welcome! Below you will find some lists of curated content about popular
              topics.
              <br />
              You can also search content using the search tool above.
            </Text>
            <Title theme={globalContext.colors}>Wizeline</Title>
            <VideoList items={ytqWizeline.items} />
            <Title theme={globalContext.colors}>Technology</Title>
            <VideoList items={ytqTechnology.items} />
            <Title theme={globalContext.colors}>eSports</Title>
            <VideoList items={ytqEsports.items} />
          </>
        ) : (
          <VideoHome />
        )}
      </Content>
    </section>
  );
}

export default HomePage;
