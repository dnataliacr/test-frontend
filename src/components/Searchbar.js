import React, { useEffect, useState } from "react";
import { useNavigate, Link, useSearchParams } from 'react-router-dom';

import logo from '../assets/logo/logo-ml.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

library.add(faMagnifyingGlass);

const SearchBar = () => {
    let navigate = useNavigate();
    let [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('search')
    const [q, setQ] = useState('')

    useEffect(() => {
        !query && setQ('')
    }, [query])



    const checkId = (str) => {
        if (str.startsWith('MLA')) return true
        else return false
    }
    const handleRoutes = () => {
        if (checkId(q)) {
            navigate(`/items/${q}`)
        } else {
            navigate(`/items?search=${q}`)
        }
    }


    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && q) {
            handleRoutes()
        }
    }

    const handleClick = () => {
        if (q) {
            handleRoutes()
        }


    }
    return (
        <header>
            <nav
                className="search-bar">
                <div className="container">
                    <Link to="/">
                        <div className="search-logo">
                            <img src={logo}  alt='logo'/>
                        </div>
                    </Link>
                    <div className={`search-bar-input ${q !== '' ? 'active' : ''}`}>
                        <input
                            type='text' placeholder='Nunca dejes de buscar'
                            onKeyUp={(e) => handleKeyPress(e)}
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                        />
                        <span onClick={handleClick}>
                            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                        </span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default SearchBar
