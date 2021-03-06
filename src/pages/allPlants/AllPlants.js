import React, {useContext} from 'react';
import content from '../../data/content.json';

import { LanguageSetting } from "../../context/LanguageContext";

function AllPlants() {
    const {activeLanguage} = useContext(LanguageSetting);

    return (
        <div className="page-container">
            <h2>{content[activeLanguage].plants.title}</h2>
            <p>{content[activeLanguage].plants.text}</p>
            <ul>
                {content[activeLanguage].plants.plants.map((plant) => <li>{plant}</li>)}
            </ul>
        </div>
    );
}

export default AllPlants;
