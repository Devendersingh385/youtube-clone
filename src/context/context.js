import React, {createContext, useState, useEffect } from "react";

import { fetchDataFromAPI } from "../utils/fetchFromAPI";

 export const ThemeContext = createContext();

 export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(()=>{
        fetchSelectedCategoryData(selectedCategory);
    },[selectedCategory]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true)
        fetchDataFromAPI(`search/?q=${query}`).then(({ contents }) => {
                console.log(contents);
                setSearchResults(contents);
                setLoading(false);
        })
    }
    return (
        <ThemeContext.Provider value={{
            loading,
            setLoading,
            searchResults,
            setSearchResults,
            selectedCategory,
            setSelectedCategory,
            mobileMenu,
            setMobileMenu
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
 }