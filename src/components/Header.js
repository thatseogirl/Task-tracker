import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

export default function Header({ title }) {

    const handleClick = (e) => {
        console.log('click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={handleClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
