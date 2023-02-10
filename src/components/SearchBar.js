import React, { useEffect, useState } from "react";
import { useNavigate, Link, useSearchParams } from 'react-router-dom';

import logo from '../assets/logo/logo-ml.png'

const SearchBar = ({ }) => {
    let navigate = useNavigate();
    let [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('search')
    const [q, setQ] = useState('')
    const handleRoutes = () => {
            navigate(`/items?search=${q}`)
    const handleKeyPress = (event) => {
            handleRoutes()
    }
    const handleClick = () => {
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
                            <img src={logo} />
                        </div>
                    </Link>
                    <div className={`search-bar-input ${q !== '' ? 'active' : ''}`}>
                        <input
                            type='text' placeholder='Nunca dejes de buscar'
                            onKeyUp={(e) => handleKeyPress(e)}
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                        />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default SearchBar