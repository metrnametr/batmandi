import React from 'react'
import './style.css'

const Header = ({ searchWord, toggleWord, toggleSearched }) => {

    const toggleInput = (e) => {
        toggleSearched(1)
        toggleWord(e.target.value)
    }

    return(
        <div className='header'>
            <div className='logo'>Movie Catalog</div>
            <div className='search-box'>
                <input
                    value={searchWord}
                    type='text' 
                    placeholder='search'
                    onChange={toggleInput}
                />
            </div>
            <div className='login'>
                MY login
            </div>
        </div>
    )
}

export default Header;