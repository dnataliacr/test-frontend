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
                    <Link to="/">
                        <div className="search-logo">
                            <img src={logo} />
                        </div>
                    </Link>
            </nav>
        </header>
    )
}

export default SearchBar