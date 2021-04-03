import React, {useState, createContext} from 'react';

export const SectionContext = createContext();

export const SectionProvider = props => {
    const [section, setSection] = useState({main: true, videoId: ""});

    return(
        <SectionContext.Provider value={[section, setSection]}>
            {props.children}
        </SectionContext.Provider>
    );
}