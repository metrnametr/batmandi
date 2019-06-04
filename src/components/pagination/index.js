import React, { useState} from 'react'
import './style.css'

const Pagination = ({ page, togglePagination }) => {
    const [myPage, setPage] = useState(page)

    const next = () => {
        setPage(myPage + 1)
        togglePagination(myPage)
    }

    const prev = () => {
        setPage(myPage - 1)
        togglePagination(myPage)
    }
    return(
        <div className='pagination'>
            <span onClick={() => (myPage > 1) ? prev() : null}> prev </span>
            <span> { myPage } </span>
            <span onClick={next}> next </span>
        </div>
    )
}

export default Pagination;