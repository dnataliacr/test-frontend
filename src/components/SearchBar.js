import React, { useEffect, useState } from "react";
import { useNavigate, Link, useSearchParams } from 'react-router-dom';

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
        <h1>
            SearchBar
        </h1>
    )
}

export default SearchBar