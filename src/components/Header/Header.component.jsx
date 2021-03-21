import React, {useState} from 'react';
import styled from 'styled-components';
import Switch from 'react-input-switch';

const NavBar = styled.nav`
    background-color: #212121;
    width: 100vw;
    color: white;
    padding: 1rem 2.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
`;

const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Search = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    height: 4rem;
`;

const TextField = styled.input`
    color: #e2e2e2;
    background-color: #131313;
    font-size: 1.6rem;
    border: 0.1rem solid #303030;
    border-radius: 0.5rem 0 0 0.5rem;
    width: 40rem;
    padding: 1rem;
`;

const TextFieldButton = styled.button`
    border-radius: 0 0.5rem 0.5rem 0;
    width: 6rem;
    border: 0;
    background-color: #323232;
    color: #6f6f6f;
`;

const ImgWrapper = styled.div`
    width: 5rem;
    height: 5rem;
    border: 0;
    margin-left: 2rem;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
`;

const Menu = styled.div`
    margin-right: 2.5rem;
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const YtIcon = styled.div`
    color: #556cd6;
    margin-right: 0.5rem;
`;

const Title = styled.span`
    font-weight: bold;
    font-size: 2.8rem;
`;

const DarkMode = styled.div`
    margin: 0 1rem;
`;

const Header = () => {
    const [value, setValue] = useState("light");

    return(
        <NavBar>
            <Section>
                <Menu><i className="fas fa-bars fa-2x"/></Menu>
                <IconWrapper>
                    <YtIcon><i className="fab fa-youtube fa-2x"/></YtIcon>
                    <Title data-testid="title-content">Wizeline Challenge</Title>
                </IconWrapper>
            </Section>
            <Search>
                <TextField placeholder="Search"/>
                <TextFieldButton><i className="fas fa-search fa-lg"/></TextFieldButton>
            </Search>
            <Section>
                <Section>
                    <DarkMode><span role="img" aria-label="light-mode">🌞</span></DarkMode>
                    <Switch on="dark" off="light" value={value} onChange={setValue}/>
                    <DarkMode><span role="img" aria-label="dark-mode">🌚</span></DarkMode>
                </Section>
                <ImgWrapper>
                    <Image data-testid="image" src="https://www.vertexacc.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" alt="user"/>
                </ImgWrapper>
            </Section>
        </NavBar>
    );
}

export default Header;
