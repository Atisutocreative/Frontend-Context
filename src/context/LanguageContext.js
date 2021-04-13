import React, {createContext, useState} from "react";

export const LanguageSetting = createContext({});

const LanguageProvider = (props) => {
    const [language, toggleLanguage] = useState("nl");
    return <LanguageSetting.Provider value={{language, toggleLanguage}}>
        { props.children }
    </LanguageSetting.Provider>

}

export default LanguageProvider;